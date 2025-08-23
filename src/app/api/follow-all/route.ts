import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const scriptPath = path.join(process.cwd(), 'seed_google.py');
    
    // Execute the Python script
    const pythonProcess = spawn('.venv/bin/python', [scriptPath], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let output = '';
    let error = '';

    // Collect output
    pythonProcess.stdout?.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.stderr?.on('data', (data) => {
      error += data.toString();
    });

    // Wait for the process to complete
    return new Promise<NextResponse>((resolve) => {
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(NextResponse.json({ 
            success: true, 
            message: 'Follow automation started successfully',
            output 
          }));
        } else {
          resolve(NextResponse.json({ 
            success: false, 
            message: 'Follow automation failed',
            error,
            output 
          }, { status: 500 }));
        }
      });
    });

  } catch (error) {
    console.error('Error executing Python script:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to start follow automation',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

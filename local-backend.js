const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = 8000;

// 启用 CORS 允许前端访问
app.use(cors({
  origin: ['https://signfold.com', 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Local backend is running' });
});

// 执行 Python 脚本的端点
app.post('/api/follow-all', async (req, res) => {
  try {
    const scriptPath = path.join(process.cwd(), 'seed_google.py');
    
    console.log('Starting Python script:', scriptPath);
    
    // 执行 Python 脚本
    const pythonProcess = spawn('.venv/bin/python', [scriptPath], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let output = '';
    let error = '';

    // 收集输出
    pythonProcess.stdout?.on('data', (data) => {
      output += data.toString();
      console.log('Python output:', data.toString());
    });

    pythonProcess.stderr?.on('data', (data) => {
      error += data.toString();
      console.error('Python error:', data.toString());
    });

    // 等待进程完成
    pythonProcess.on('close', (code) => {
      console.log('Python process exited with code:', code);
      
      if (code === 0) {
        res.json({ 
          success: true, 
          message: 'Follow automation started successfully',
          output 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'Follow automation failed',
          error,
          output 
        });
      }
    });

    // 处理进程错误
    pythonProcess.on('error', (err) => {
      console.error('Failed to start Python process:', err);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to start Python process',
        error: err.message
      });
    });

  } catch (error) {
    console.error('Error executing Python script:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to start follow automation',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Local backend server running on http://localhost:${PORT}`);
  console.log(`📝 Health check: http://localhost:${PORT}/health`);
  console.log(`🤖 Follow automation: http://localhost:${PORT}/api/follow-all`);
});

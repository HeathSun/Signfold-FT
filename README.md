# Signfold - Agentic Button for User Engagement

A browser automation platform that helps SaaS companies grow through organic social media engagement. With a single click, Signfold automatically follows companies across LinkedIn, YouTube, Discord, and other platforms, creating authentic connections that drive user acquisition and community building.

**Built at the 2025 Agent Foundry Hackathon in San Francisco**

## Features

- One-click automation for following companies across multiple platforms
- Multi-platform support including LinkedIn, YouTube, Discord, and Twitter/X
- Real-time status updates during automation process
- Local browser integration using existing Chrome sessions
- Modern UI with interactive animations
- Hybrid architecture with web interface and local automation backend

## Tech Stack

**Frontend:** Next.js 15, TypeScript, Tailwind CSS, React
**Backend:** Express.js server, Python automation with browser-use library, Chrome automation via Playwright, OpenAI GPT-5 integration

## Architecture

```
Frontend (signfold.com) → API Call → Local Backend → Python Script → Browser Automation
```

The system uses a hybrid approach where the frontend can be deployed globally while keeping the automation backend local for security and performance.

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.12+
- Google Chrome browser
- OpenAI API key

### Installation

1. Clone the repository and install dependencies
   ```bash
   git clone https://github.com/your-username/signfold-ft.git
   cd signfold-ft
   npm install
   ```

2. Set up environment variables
   ```bash
   echo "OPENAI_API_KEY_0=your_openai_api_key_here" > .env
   ```

3. Install Playwright browsers
   ```bash
   npx playwright install
   ```

### Running the Application

1. Start the local backend server
   ```bash
   npm run backend
   ```

2. Start the frontend development server
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000` and test the automation

## How It Works

1. User clicks the button on the Signfold interface
2. API call is made to the local backend server
3. Python script executes browser automation
4. Chrome browser navigates to social platforms
5. Automated actions are performed (follow, subscribe, join)
6. Real-time updates are provided to the user

## Use Case for SaaS Growth

Signfold is designed specifically for SaaS companies looking to build organic social media presence and grow their user base. By automating the process of following relevant companies and influencers in your industry, you can:

- Build authentic connections with potential customers and partners
- Increase your social media reach and visibility
- Create engagement opportunities for your content
- Establish thought leadership in your niche
- Drive organic traffic to your SaaS platform

The platform maintains the authenticity of manual engagement while scaling the process to reach hundreds of relevant accounts efficiently.

## Project Structure

```
signfold-ft/
├── src/                    # Next.js app and components
├── seed_google.py          # Main automation script
├── local-backend.js        # Express.js backend server
└── package.json
```

## Configuration

- Environment Variables: Set `OPENAI_API_KEY_0` for GPT-5 integration
- Browser Profile: Uses existing Chrome profile for authentication
- Supported Platforms: LinkedIn, YouTube, Discord, Twitter/X

## Deployment

**Frontend:** Deploy to Vercel/Netlify
**Backend:** Must run locally for browser automation

## Security

- Automation runs locally on your machine
- No sensitive data transmitted to external servers
- Uses existing browser authentication
- CORS configured for secure cross-origin requests

## Troubleshooting

Common issues include connection refused errors (ensure backend is running on port 8000), Python import errors (activate virtual environment), and browser automation failures (check Chrome installation and platform login status).

## Support

For support and questions:
- Create an issue on GitHub
- Email: heathsun@cmu.edu
- Documentation: docs.signfold.com

---

**Signfold** - Growing SaaS companies through organic social media engagement.

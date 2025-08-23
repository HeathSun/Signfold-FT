from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI
from dotenv import load_dotenv
from browser_use.browser import BrowserProfile
from pathlib import Path
import os
import asyncio
from playwright.async_api import async_playwright

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY_0")
llm = ChatOpenAI(model="gpt-5",api_key = api_key)
PROFILE_DIR = Path(".\\gprofile").resolve()

# If no executable_path provided, uses Playwright/Patchright's built-in Chromium
profile = BrowserProfile(
    # ⚠️ 注意：0.6.1 里字段叫 executable_path / user_data_dir
    executable_path='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',  # macOS
    user_data_dir='~/.config/browseruse/profiles/default',   # this is the default
    headless=False
)

# 2) 把 profile 传给 BrowserSession
browser_session = BrowserSession(browser_profile=profile)

# 3) 创建 Agent
agent = Agent(
    task="""
    1. go to https://www.linkedin.com/company/composiohq/. Do not wait.
    2. Instantly click follow and show me the result. 
    3. Go to https://www.youtube.com/@Composio.
    4. Click follow and then close the page you opened.
    5. Go to https://discord.com/invite/GjRcuRTM.
    6. Click follow and then close the page you opened.
    """,
    llm=llm,
    browser_session=browser_session,
)

agent.run_sync()
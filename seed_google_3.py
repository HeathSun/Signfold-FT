import asyncio
from pathlib import Path
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI
from browser_use.browser import BrowserProfile
import os
# Chrome 路径

TASKS = ["""
1. Open a new page in Chrome.
2. Go to https://www.linkedin.com/company/aforecapital/.
3. Click follow and then close the page you opened.
""",
"""
1. Open a new page in Chrome.
2. Go to https://www.youtube.com/@Composio.
3. Click follow and then close the page you opened.
""",
"""
1. Open a new page in Chrome.
2. Go to https://discord.com/invite/GjRcuRTM.
3. Click follow and then close the page you opened.
"""]
i=0
LLM=[]
while i<5:
    LLM.append(ChatOpenAI(model="gpt-5",api_key = os.getenv(f"OPENAI_API_KEY_{i}")))
    i=i+1

print(1)
async def run_agent(idx,task_text: str):
    profile = BrowserProfile(
        storage_state=Path("storage_state.json"),
        headless=False
    )
    session = BrowserSession(browser_profile=profile)
    agent = Agent(task=task_text, llm=LLM[idx%5], browser_session=session)
    await agent.run()

async def main():
    sem = asyncio.Semaphore(3)

    async def wrapped(task_text, idx):
        async with sem:
            await run_agent(idx,task_text)

    await asyncio.gather(*(wrapped(t, i) for i, t in enumerate(TASKS)))


if __name__ == "__main__":
    asyncio.run(main())

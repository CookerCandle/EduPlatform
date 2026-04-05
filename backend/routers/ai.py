from email import message
from email.policy import default
import requests
import json
from fastapi import APIRouter
from models.models import ChatRequest

from datetime import datetime

router = APIRouter(prefix="/ai", tags=["AI"])

OPENROUTER_API_KEY = (
    "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"
)


@router.post("/chat")
def ai_chat(req: ChatRequest):
    try:
        response = requests.post(
            url="https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps(
                {
                    "model": "openai/gpt-4.1-nano",
                    "messages": [
                        {
                            "role": "system",
                            "content": """
                                You are a strict AI learning assistant for EduPlatform. 
                                You ONLY answer questions related to education, studying, courses, homework, 
                                exams, schedules, programming, science, math, languages, and academic topics. 
                                If the user asks about anything NOT related to education or learning 
                                (e.g. politics, entertainment, cooking, personal life, jokes, games, etc.), 
                                politely decline and say: 
                                'Sorry, I can only help with education-related topics! 📚 
                                Try asking about courses, homework, study tips, or any academic subject.' 
                                Keep responses concise, friendly, and helpful. Answer in the same language the user writes in.
                            """,
                        },
                        {"role": "user", "content": req.message},
                    ],
                }
            ),
        )

        data = response.json()
        reply = data["choices"][0]["message"]["content"]
        return {"reply": reply}

    except Exception as e:
        return {"reply": f"⚠️ Error connecting to AI: {str(e)}"}


TEMPLATE_RESPONSES = {
    "code": (
        "💻 Async/Await in Python — Practical Example\n\n"
        "```python\nimport asyncio\nimport aiohttp\n\nasync def fetch_url(session, url):\n    async with session.get(url) as response:\n        data = await response.text()\n        print(f'{url}: {len(data)} chars')\n        return data\n\nasync def main():\n    urls = [\n        'https://example.com',\n        'https://httpbin.org/get',\n    ]\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_url(session, u) for u in urls]\n        await asyncio.gather(*tasks)\n\nasyncio.run(main())\n```\n\n"
        "🔑 Key points:\n"
        "- `async def` makes a coroutine\n"
        "- `await` pauses until the result is ready\n"
        "- `asyncio.gather()` runs tasks concurrently\n"
        "- Great for I/O-bound work like API calls!"
    ),
    "projects": (
        "💡 5 Beginner-Friendly Portfolio Projects\n\n"
        "1. Personal Portfolio Site — Showcase your skills with a responsive HTML/CSS/JS site\n"
        "2. Weather Dashboard — Fetch real-time weather data from an API and display it beautifully\n"
        "3. Task Manager App — Full CRUD app with React + local storage or a backend\n"
        "4. Blog Platform — Markdown-based blog with Next.js or a static site generator\n"
        "5. E-commerce Product Page — Shopping cart, filters, and responsive product grid\n\n"
        "🚀 *Start with #1, then progress to #3 or #5 to show full-stack skills!*"
    ),
    "courses": (
        "🎓 Full-Stack Developer Learning Path\n\n"
        "Frontend (3–4 months):\n"
        "- HTML & CSS Fundamentals\n"
        "- JavaScript ES6+\n"
        "- React.js + Tailwind CSS\n\n"
        "Backend (2–3 months):\n"
        "- Node.js + Express  OR  Python + FastAPI\n"
        "- REST API Design\n"
        "- Authentication (JWT, OAuth)\n\n"
        "Database & DevOps (1–2 months):\n"
        "- PostgreSQL / MongoDB\n"
        "- Git & GitHub\n"
        "- Docker basics & deployment\n\n"
        "📌 *Recommended order: Frontend → Backend → Database → Build 2–3 projects → Deploy!*"
    ),
    "quiz": (
        "❓ HTML & CSS Quiz — 5 Questions\n\n"
        "1. What does the `<!DOCTYPE html>` declaration do?\n"
        "   a) Defines the page title  b) Tells the browser which HTML version to use  c) Links a stylesheet\n\n"
        "2. Which CSS property is used to change text color?\n"
        "   a) `font-color`  b) `text-color`  c) `color`\n\n"
        "3. What is the default value of `position` in CSS?\n"
        "   a) `relative`  b) `absolute`  c) `static`\n\n"
        "4. Which HTML tag is used to create a hyperlink?\n"
        "   a) `<link>`  b) `<a>`  c) `<href>`\n\n"
        "5. What does `display: flex` do?\n"
        "   a) Hides the element  b) Creates a flexible box layout  c) Makes text bold\n\n"
        "✅ Answers: 1-b, 2-c, 3-c, 4-b, 5-b\n"
        "\n*How did you do? Ask me to explain any answer!*"
    ),
}

def day_schedule(day):
    match day:
        case "Monday":
            message = ("📅 Monday's Schedule\n\n"
                       "9:00  - 10:00 : Digital Illustration for Beginners\n"
                       "11:00 - 12:00 : Data Structures and Algorithms\n"
                       "18:00 - 19:00 : JavaScript Essentials\n\n")
            return message
        case "Tuesday":
            message = ("📅 Tuesday's Schedule\n\n"
                       "14:00 - 15:30 : Data Structures and Algorithms\n"
                       "18:00 - 19:00 : JavaScript Essentials\n\n")
            return message
        case "Wednesday":
            message = ("📅 Wednesday's Schedule\n\n"
                       "9:00  - 10:00 : Digital Illustration for Beginners\n"
                       "11:00 - 12:00 : Data Structures and Algorithms\n"
                       "14:00 - 16:00 : Alchemy of Color Grading\n"
                       "18:00 - 19:00 : JavaScript Essentials\n\n")
            return message
        case "Thursday":
            message = ("📅 Thursday's Schedule\n\n"
                       "14:00 - 15:30 : Data Structures and Algorithms\n"
                       "18:00 - 19:00 : JavaScript Essentials\n\n")
            return message
        case "Friday":
            message = ("📅 Friday's Schedule\n\n"
                       "9:00  - 10:00 : Digital Illustration for Beginners\n"
                       "15:00 - 17:00 : Data Structures and Algorithms\n"
                       "18:00 - 19:00 : JavaScript Essentials\n\n")
            return message
        case "Saturday":
            message = ("📅 Saturday's Schedule\n\n"
                       "9:00  - 10:00 : Digital Illustration for Beginners\n"
                       "14:00 - 16:00 : Alchemy of Color Grading\n"
                       "19:00 - 20:00 : JavaScript Essentials\n\n")
            return message
        case "Sunday":
            message = ("📅 Sunday's Schedule\n\n"
                       "No classes scheduled! Use this day to review past lessons, work on projects, or relax and recharge for the week ahead! 🌟\n\n")
            return message
        case _:
            return "Sorry, I don't have a schedule for that day!"


@router.post("/ai_helper")
def ai_helper(req: ChatRequest):
    keyword = req.message.strip().lower()
    if "schedule" in keyword:
        day = datetime.now().strftime("%A")
        message = day_schedule(day)
        return {"reply": message}
    elif "explain" in keyword:
        return {"reply": TEMPLATE_RESPONSES["explain"]}
    
    if keyword in TEMPLATE_RESPONSES:
        return {"reply": TEMPLATE_RESPONSES[keyword]}

    return {
        "reply": "🤔 I don't have a template for that yet. Try asking in the main chat!"
    }

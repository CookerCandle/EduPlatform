# Konkurs Project

Монорепозиторий с двумя приложениями:
- Backend: FastAPI
- Frontend: React + Vite

## Требования

- Python 3.10+
- Node.js 18+
- npm 9+

## Структура

- `backend/` - API на FastAPI
- `frontend/` - клиент на React (Vite)

## Запуск Backend (FastAPI)

Откройте терминал 1:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Проверка:
- API: http://localhost:8000/
- Test endpoint: http://localhost:8000/test
- Swagger: http://localhost:8000/docs

## Запуск Frontend (React + Vite)

Откройте терминал 2:

```bash
cd frontend
npm install
npm run dev
```

Проверка:
- Frontend: http://localhost:5173/

## Одновременный запуск (коротко)

1. В первом терминале запустите backend на порту 8000.
2. Во втором терминале запустите frontend на порту 5173.
3. Откройте http://localhost:5173/ в браузере.

## Полезные команды

Backend:

```bash
cd backend
source .venv/bin/activate
uvicorn main:app --reload
```

Frontend:

```bash
cd frontend
npm run dev
npm run build
npm run preview
```
# React + Node.js Full-Stack Demo

A simple full-stack application demonstrating React frontend connected to Node.js backend API.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express, CORS
- **Deployment**: Vercel

## Project Structure

```
├── backend/
│   ├── server.js         # Express API server
│   ├── package.json
│   └── vercel.json       # Vercel deployment config
└── frontend/
    ├── src/
    │   └── App.tsx       # React app with API fetch
    └── package.json
```

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:3001
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints

- `GET /api/hello` - Returns greeting message

## Deployment

Both frontend and backend are deployed separately on Vercel:
- Frontend: [your-frontend.vercel.app]
- Backend: [your-backend.vercel.app]

## Environment Variables

Frontend uses `VITE_API_URL` to connect to backend API.

## Author

Ivan Duarte - Full-Stack Developer  
[ByteUp LLC](https://byteup.co)
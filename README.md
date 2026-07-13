Golf Live Scoring System
🏌️‍♂️ Golf Live Scoring System
A modern, lightweight live scoring platform for golf tournaments, designed for youth leagues and club competitions.
The system focuses on simplicity, gross/net scoring, matchplay, mobile score entry, and optional local club servers that can synchronize with a central league backend.

🎯 Project Goals
This project aims to provide a practical alternative to complex commercial golf apps that often:

force hole‑by‑hole input

use US‑centric rules instead of German HCPI/CR/Slope

lack youth league support

require cloud hosting and cannot run locally

do not support offline or hybrid club setups

The goal is a clean, reliable, privacy‑friendly scoring solution that fits the real needs of golf clubs.

🚀 Key Features
Mobile Scoring (PWA)  
Players enter scores directly via LTE/5G — no installation required.

Tournament Management  
Strokeplay, gross/net scoring, matchplay, youth tournaments.

Live Leaderboard  
Automatic updates after each score submission.

League Mode  
Multiple tournaments, point systems, season standings.

Local Club Servers (optional)  
Each club can run its own server and sync results to a central league system.

Offline Support  
Scores can be cached on the device and uploaded later.

🧩 Technical Architecture
The system consists of three main components:

1. Frontend (PWA)
React + Vite

Mobile‑optimized

Offline‑capable

Score input & leaderboard display

2. Backend (API)
Node.js + Express

REST API for scores, tournaments, leaderboards

JWT authentication

Optional WebSockets for live updates

3. Database
PostgreSQL (recommended)

SQLite for small local installations

🏗️ Project Structure
Code
golf-livescoring/
│
├── backend/        # API, scoring logic, sync module
├── frontend/       # Mobile PWA for players and admins
└── README.md
📡 Mobile Scoring
Players use their smartphones over LTE/5G to submit scores directly to the server.
This enables live leaderboards without requiring full WLAN coverage on the golf course.

🏠 Local Club Servers
Clubs may optionally run a local server:

Local storage of tournaments

Offline operation possible

Sync with the central league backend (e.g., youth league)

📅 Roadmap
[ ] Backend skeleton

[ ] Frontend PWA base

[ ] Score API (gross/net)

[ ] Leaderboard API

[ ] Matchplay module

[ ] League module

[ ] Club sync

[ ] Admin dashboard

[ ] Docker deployment

🤝 Contributing
Contributions are welcome.
The goal is to build a free, modern, practical golf scoring system that clubs can use without vendor lock‑in.

📜 License
MIT License — free for clubs, associations, and developers.

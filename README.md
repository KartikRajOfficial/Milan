<div align="center">

# 💑 Milan

### A Modern Full-Stack Dating Platform

*Milan* (मिलन) — meaning "meeting" or "union" in Hindi — is an open-source dating web application built with the MERN stack. It enables users to discover, connect, and chat with potential matches in real time.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248.svg?logo=mongodb)](https://mongoosejs.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Milan is a full-stack dating platform where users can sign up, create profiles with photos, browse other users, send match requests, and chat in real time with their connections. The name reflects its purpose — bringing people together.

---

## ✨ Features

- **User Authentication** — Secure sign-up and login with JWT-based sessions and HTTP-only cookies
- **Profile Management** — Upload and manage profile photos via Cloudinary
- **Match System** — Send, receive, and accept/reject connection requests
- **Real-Time Messaging** — Live chat between matched users powered by Socket.IO
- **Secure Passwords** — Passwords hashed with bcryptjs
- **Responsive UI** — Built with React, Tailwind CSS, and Vite for a fast, mobile-friendly experience

---

## 🛠 Tech Stack

### Frontend (`/client`)
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| PostCSS | CSS processing |

### Backend (`/server`)
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| Socket.IO | Real-time WebSocket communication |
| JSON Web Tokens | Authentication |
| bcryptjs | Password hashing |
| Cloudinary | Cloud image storage |
| cookie-parser | Cookie handling |
| dotenv | Environment variable management |

---

## 📁 Project Structure

```
Milan/
├── client/                  # React frontend
│   ├── public/              # Static assets
│   ├── src/                 # React source files
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── server/                  # Express backend
│   ├── config/              # Database & service configuration
│   ├── controllers/         # Route handler logic
│   ├── middleware/          # Auth & other middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── seeds/               # Database seed scripts
│   ├── socket/              # Socket.IO setup & event handlers
│   └── server.js            # Application entry point
│
├── .env                     # Environment variables
├── package.json             # Root scripts (dev, build, start)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/KartikRajOfficial/Milan.git
cd Milan
```

2. **Set up environment variables**

Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below).

3. **Install all dependencies and build the client**

```bash
npm run build
```

This command installs root dependencies, installs client dependencies, and creates an optimized production build of the React app.

4. **Start the server**

```bash
npm start
```

The app will be available at `http://localhost:<PORT>` (as configured in your `.env`).

### Development Mode

To run the server with hot-reloading via nodemon:

```bash
npm run dev
```

> The client dev server (Vite) should be started separately from within the `/client` directory:
> ```bash
> cd client
> npm run dev
> ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Cloudinary (image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

> ⚠️ Never commit your `.env` file to version control.

---

## 📜 Scripts

Run these from the **project root**:

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start server with nodemon (hot reload) |
| Build | `npm run build` | Install all deps + build React client |
| Production | `npm start` | Start the production server |

---

## 🔌 API Overview

The Express server exposes RESTful API routes under `/server/routes/` and real-time events via Socket.IO.

**Route categories (inferred from structure):**

| Category | Path prefix | Description |
|---|---|---|
| Auth | `/api/auth` | Register, login, logout |
| Users | `/api/users` | Profile read/update |
| Matches | `/api/matches` | Send/accept/reject match requests |
| Messages | `/api/messages` | Fetch chat history |

**Socket.IO** (`/server/socket/`) handles real-time events such as new messages and match notifications between connected clients.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing style and that the app builds successfully before submitting a PR.

---

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/KartikRajOfficial">KartikRajOfficial</a>
</div>

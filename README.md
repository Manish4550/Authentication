🔐 MERN Authentication App

A full-stack authentication and authorization system built using MongoDB, Express, React, and Node.js.
This project implements a complete auth flow including email verification, login, logout, forgot password, reset password, and protected routes.

🌐 Live Demo:
👉 https://authentication-97us.onrender.com

<img width="1536" height="1024" alt="Authentication" src="https://github.com/user-attachments/assets/cb4711ca-89d5-4811-8a83-41012f573817" />

✨ Features

User Signup & Login

Email Verification (Mailtrap)

Forgot & Reset Password

JWT Authentication (Cookies)

Protected Routes

Secure Logout

Responsive UI (Tailwind CSS)

🛠 Tech Stack

Frontend

React

Vite

Tailwind CSS

Axios

Zustand (State Management)

Backend

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

bcrypt Password Hashing

Nodemailer (Mailtrap for email testing)

📁 Project Structure
Authentication/
│
├── backend/
│   ├── db/
│   │   └── connectDB.js
│   │
│   ├── mailtrap/
│   │   ├── email.js
│   │   ├── emailTemplates.js
│   │   └── mailtrap.config.js
│   │
│   ├── middleware/
│   │   └── verifyToken.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── auth.route.js
│   │
│   ├── utils/
│   │   └── generateTokenAndSetCookie.js
│   │
│   └── index.js
│
├── frontend/
│   ├── dist/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── FloatingShape.jsx
│       │   ├── Input.jsx
│       │   ├── LoadingSpinner.jsx
│       │   └── PasswordStrengthMeter.jsx
│       │
│       ├── pages/
│       ├── store/
│       │   └── authStore.jsx
│       │
│       ├── utils/
│       │   └── date.js
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── .env
├── package.json
└── README.md

🔐 Authentication Flow

User signs up

Verification email sent (Mailtrap)

Email verified successfully

User logs in

Access protected dashboard

Forgot / Reset password if needed

▶️ Build & Run
npm run build
npm run start

🚀 Deployment

Frontend & Backend deployed on Render

Secure environment variables

Production-ready build

👨‍💻 Author

Manish Kumar
GitHub: https://github.com/Manish4550?tab=repositories

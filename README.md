# 💬 Sampark — Real-Time Chat Application

Sampark (सम्पर्क, meaning "connection" in Hindi) is a full-stack, real-time chat application built on the **MERN stack**. It supports instant one-on-one messaging, secure authentication, and multimedia sharing, all wrapped in a clean, responsive UI.

🔗 **Repository:** [github.com/Hariom-99/Sampark](https://github.com/Hariom-99/Sampark)

---

## ✨ Features

- ⚡ **Real-time messaging** powered by Socket.IO with a low-latency, event-driven architecture
- 🔐 **Secure authentication & authorization** using JWT
- 🗂️ **RESTful API** backend built with Node.js and Express.js
- 🧠 **Lightweight global state management** with Zustand for optimized performance and fewer re-renders
- 🖼️ **Cloud-based media handling** for image uploads and storage in chats
- 📱 **Responsive, modern UI** following current frontend best practices
- 🔄 **Bi-directional communication** for a seamless, live conversation experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Zustand, CSS |
| Backend | Node.js, Express.js |
| Real-time Layer | Socket.IO |
| Database | MongoDB |
| Auth | JWT (JSON Web Tokens) |
| Media Storage | Cloud-based storage (image upload) |

---

## 📁 Project Structure

```
Sampark/
├── backend/     # Express server, REST APIs, Socket.IO server, auth, DB models
├── frontend/    # React client application
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/Hariom-99/Sampark.git
cd Sampark
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

> Add any additional cloud media storage credentials (e.g. Cloudinary) here as required by your setup.

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app should now be running locally — the frontend will typically be available at `http://localhost:5173` (Vite default) and the backend API at `http://localhost:5000`.

---

## 📝 Usage

1. Sign up for a new account or log in with existing credentials.
2. Start a conversation by selecting a contact.
3. Send text messages and images in real time.
4. Messages sync instantly across sessions via Socket.IO.

---

## 🗺️ Roadmap Ideas

- Group chat support
- Message read receipts and typing indicators
- Push notifications
- End-to-end encryption

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/Hariom-99/Sampark/issues).

---

## 📄 License

This project is currently unlicensed. Feel free to reach out to the author for usage permissions.

---

## 👤 Author

**Hariom Patidar**
- GitHub: [@Hariom-99](https://github.com/Hariom-99)
- LinkedIn: [patidar-hariom](https://www.linkedin.com/in/patidar-hariom/)

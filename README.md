# 🌐 Portfolio Fullstack (React + Express)

A modern **Fullstack Portfolio Website** built using **Vite + React** for the frontend and **Express.js** for the backend.  
This project is designed as a personal showcase of my profile, projects, and web development skills — with an integrated API and server deployment.

---

## 🚀 Tech Stack

### 🖥 Frontend (Client)
- ⚡ [Vite](https://vitejs.dev/) – lightning-fast React bundler
- ⚛️ React.js – modern component-based UI library
- 🎨 CSS / Bootstrap / Tailwind (adjust as used)
- 🌐 Deployed via GitHub Pages (gh-pages)

### ⚙️ Backend (Server)
- 🧱 Express.js – minimal and flexible Node.js web framework
- 🔒 CORS and JSON middleware setup
- 📡 REST API endpoint for dynamic content
- 🗂 Static serving for React build in production

---

## 📁 Project Structure

```

portfolio-fullstack/
├── client/                 # React (Vite) frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Express backend
│   ├── index.js
│   ├── routes/
│   ├── package.json
│   └── ...
│
├── package.json            # Root scripts to run both client & server
├── .gitignore
└── README.md

````

---

## ⚡ Quick Start (Development)

Clone this repository and install dependencies:

```bash
git clone https://github.com/rayhanzz772/portfolio-fullstack.git
cd portfolio-fullstack
npm install
````

Then run both frontend and backend concurrently:

```bash
npm run dev
```

* Frontend → [http://localhost:5173](http://localhost:5173)
* Backend → [http://localhost:5000](http://localhost:5000)

---

## 🧱 Build & Deploy (Production)

Build the React app and serve with Express:

```bash
cd client
npm run build
cd ..
npm start
```

This will:

* Serve React’s `dist/` folder via Express
* Run the backend API on the same port

---

## 🔗 Example API Endpoint

```bash
GET /api/hello
```

**Response:**

```json
{ "message": "Hello from Express!" }
```

---

## 💡 Environment Variables

For development, create `.env` file in the `client/` folder:

```
VITE_API_URL=http://localhost:5000
```

---

## 📸 Preview

> *(optional – tambahkan screenshot website kamu di sini)*

---

## 🧑‍💻 Author

**Rayhan Z**
📍 Fullstack Developer & Technology Enthusiast
🔗 [GitHub](https://github.com/rayhanzz772) • [LinkedIn](https://linkedin.com/in/) *(tambahkan link kamu)*

---

## 🪄 License

This project is licensed under the **MIT License** — feel free to use and adapt for your own portfolio!


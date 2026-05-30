# 📚 Library Management System

A full-stack Library Management System with a **Java Spring Boot** REST backend and a **React** frontend. The system allows librarians and members to manage books, borrowing records, and memberships through a clean web interface.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Java, Spring Boot |
| Frontend | React (JavaScript) |
| API | REST |
| Build Tool | Maven / npm |

---

## 📁 Project Structure

```
Library-Management-System/
├── Library/              # Spring Boot backend
│   ├── src/
│   │   └── main/
│   │       ├── java/     # Controllers, Services, Repositories, Models
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── library-app/          # React frontend
    ├── public/
    ├── src/
    │   ├── components/
    │   └── App.js
    └── package.json
```

---

## ✨ Features

- **Book Management** — Add, update, delete, and search books by title, author, or ISBN
- **Member Management** — Register and manage library members
- **Issue & Return** — Issue books to members and track due dates
- **Availability Tracking** — Real-time book availability status
- **REST API** — Clean API endpoints consumed by the React frontend

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Node.js 18+ and npm
- Maven

---

### Backend Setup

```bash
cd Library
mvn clean install
mvn spring-boot:run
```

The backend starts on `http://localhost:8080`.

---

### Frontend Setup

```bash
cd library-app
npm install
npm start
```

The React app starts on `http://localhost:3000` and proxies API calls to the backend.

---

## 🔌 API Endpoints (Sample)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Add a new book |
| GET | `/api/books/{id}` | Get book by ID |
| PUT | `/api/books/{id}` | Update book |
| DELETE | `/api/books/{id}` | Delete book |
| GET | `/api/members` | Get all members |
| POST | `/api/issue` | Issue a book to a member |
| POST | `/api/return` | Return a book |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

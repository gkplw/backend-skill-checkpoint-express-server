# Q&A API

A RESTful API for a Question & Answer platform.  
Built with **Node.js + Express + PostgreSQL**.  
Supports creating questions, posting answers, searching, voting, and more.

---

## 🚀 Features

- **Questions**
  - Create new questions
  - Retrieve all questions / Search questions
  - Get a single question by ID
  - Update or delete a question
  - Vote on questions
  - Manage answers related to a question

- **Answers**
  - Create a new answer
  - Get all answers for a question
  - Delete all answers for a question
  - Vote on answers

- **Middleware**
  - Input validation for questions, answers, and votes
  - Check if a question/answer exists before processing
  - Reusable middleware for cleaner and maintainable code

---

## 📂 Project Structure

backend-skill-checkpoint-express-server/
│
├── controllers/
│   ├── answerController.mjs
│   └── questionController.mjs
│
├── middlewares/
│   └── validator.mjs
│
├── repositories/
│   ├── answerRepository.mjs
│   └── questionRepository.mjs
│
├── routes/
│   ├── answerRoutes.mjs
│   └── questionRoutes.mjs
│
├── services/
│   ├── answerService.mjs
│   └── questionService.mjs
│
├── utils/
│   └── db.mjs
│
├── app.mjs
└── README.md

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg) (PostgreSQL client)

---

## ⚙️ Setup

1. **Clone the repository**
    git clone https://github.com/gkplw/backend-skill-checkpoint-express-server
    cd project

2. **Install dependencies**
    npm install

3. **Database Connection Setup**
    Edit `utils/db.mjs` with your PostgreSQL credentials.

4. **Run the server**
    npm run dev

---

## 📖 API Endpoints

Questions

| Method | Endpoint                 | Description                         |
| ------ | ------------------------ | ----------------------------------- |
| POST   | `/questions`             | Create a new question               |
| GET    | `/questions`             | Retrieve all questions              |
| GET    | `/questions/search`      | Search questions by title/category  |
| GET    | `/questions/:id`         | Get a question by ID                |
| PUT    | `/questions/:id`         | Update a question                   |
| DELETE | `/questions/:id`         | Delete a question (and its answers) |
| POST   | `/questions/:id/vote`    | Vote on a question                  |
| POST   | `/questions/:id/answers` | Create an answer for a question     |
| GET    | `/questions/:id/answers` | Get all answers for a question      |
| DELETE | `/questions/:id/answers` | Delete all answers for a question   |

Answers

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/answers/:id/vote` | Vote on an answer |

---

## 📌 Example Request/Response

Create Question

- Request

    POST /questions
    Content-Type: application/json

    {
        "title": "What is Node.js?",
        "description": "Can someone explain what Node.js is?",
        "category": "Programming"
    }

- Response

    {
        "message": "Question created successfully."
    }

---

## License

MIT

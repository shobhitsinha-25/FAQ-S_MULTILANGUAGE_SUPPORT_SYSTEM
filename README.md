# FAQ'S_MULTILANGUAGE_SUPPORT_SYSTEM

## Overview

This is a **FAQ Management System** that supports **multiple languages** (English, Hindi, Bengali). It allows users to **add, retrieve, and manage FAQs** with automatic **language translation**. The backend is built using **Node.js (Express.js), MongoDB, Redis, and Docker**.

## Features

**CRUD Operations**: Create, Read, Update, and Delete FAQs.  
**Multilingual Support**: Automatic translation using Google Translate API.  
**Redis Caching**: Improves performance by caching FAQ responses.  
**Admin Panel**: Built with **React.js** to manage FAQs.  
**Docker Support**: Deployable with Docker and Docker Compose.  
**Unit Testing**: Uses **Mocha, Chai, and Supertest** for API testing.  
**Git & Version Control**: Organized with proper commit messages and branches.

---

## Installation

### Prerequisites

- **Node.js** (v16+)
- **MongoDB** (Locally or MongoDB Atlas)
- **Redis** (Locally or cloud-based)
- **Docker** (Optional for containerization)

### Clone the Repository

```bash
 git clone https://github.com/shobhitsinha-25/FAQ-S_MULTILANGUAGE_SUPPORT_SYSTEM.git
 cd backend
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the root of the backend project and add the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/faqdb
REDIS_HOST=localhost
REDIS_PORT=6379
GOOGLE_TRANSLATE_API_KEY=your-api-key
```

### Start MongoDB and Redis

- **MongoDB**: Ensure it is running (`mongod` for local setup).
- **Redis**: Start Redis server (`redis-server`).

### Run the Application

```bash
npm start
```

The server will start at `http://localhost:5000`.

---

## API Usage

### Get FAQs (Default: English)

```bash
GET /api/faq
```

Example Response:

```json
[
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime."
  }
]
```

### Get FAQs in Hindi

```bash
GET /api/faq?language=hi
```

### Create an FAQ

```bash
POST /api/faq
```

#### Request Body:

```json
{
  "question": "What is JavaScript?",
  "answer": "JavaScript is a programming language.",
  "language": "en"
}
```

---

## Running Tests

Run unit tests with Mocha and Chai:

```bash
npm test
```

---

## Docker Setup

### Build and Run Containers

```bash
docker-compose up --build
```

### Stop Containers

```bash
docker-compose down
```

---

## Contribution Guidelines

1. **Fork** the repository.
2. Create a **feature branch** (`feat-new-feature`).
3. Follow **conventional commits**:
   - `feat: Add new translation support`
   - `fix: Improve Redis caching`
   - `docs: Update API documentation`
4. **Submit a Pull Request (PR)**.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any issues, open an **issue** in the repository or contact **@shobhitsinha-25**.

---

### 🚀 Happy Coding! 🎯

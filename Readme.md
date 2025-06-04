````markdown
# Book Review API

A RESTful API built with Node.js, Express, MongoDB, and JWT authentication for managing books and reviews.

---

## Features

- User signup and login with JWT authentication
- Add, list, and search books with filters and pagination
- Submit, update, and delete book reviews (one review per user per book)
- View book details with average rating and paginated reviews
- Swagger UI documentation for easy API exploration

---

## Tech Stack

- Node.js with Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- Swagger for API documentation

---

## Project Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/book-review-api.git
   cd book-review-api
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory with the following variables:**

   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://agamkapil:agamkapil@cluster0.jhdepv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=billeasy
   ```

   Replace the values as needed.


---

## How to Run Locally

Start the development server:

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

---

## Using Swagger for API Documentation

Swagger UI is available at:

```
http://localhost:3000/api-docs
```

It provides interactive documentation for all API endpoints, including request and response schemas, example inputs, and authentication details.

---

## Design Decisions & Assumptions

* **Authentication:** JWT is used to secure routes that require user authentication.
* **Database:** MongoDB was chosen for simplicity and flexibility using Mongoose ODM.
* **One review per user per book:** Enforced by checking existing reviews before creation.
* **Pagination:** Implemented on book listings and reviews to optimize data transfer and performance.
* **Case-insensitive search:** Allows users to find books by partial matches on title or author.
* **Modular structure:** Controllers, routes, and models are separated for maintainability.
* **Environment variables:** Used for sensitive data and configuration to keep code clean and secure.
* **Error handling:** Basic error responses with HTTP status codes and messages for client clarity.
* **Swagger:** API documentation auto-generated and accessible via `/api-docs`.

---

Feel free to contribute or raise issues!

---

**Author:** Your Name
**License:** MIT

```

---

If you want, I can also help you generate a `.env.example` or `package.json` snippet!
```
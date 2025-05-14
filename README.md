# 📚 Book Management REST API

A simple Book Management REST API built using Node.js and TypeScript. Supports CRUD operations and CSV bulk import with manual validation.

## 🚀 How to Run

1. Clone the repo and navigate into the folder.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with `PORT=5000`.
4. Run `npx ts-node src/app.ts` to start the server.
5. Use Postman/Hoppscotch to test endpoints.

## 🧪 Sample Endpoints

- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`
- `POST /api/books/import` (CSV upload)

## ✅ Bonus

- TypeScript
- Central error handling
- Logging with Morgan
- Jest unit test

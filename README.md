#  Book Management REST API

A simple Book Management REST API built using Node.js and TypeScript. Supports CRUD operations and CSV bulk import with manual validation.

##  How to Run

1. Clone the repo and navigate into the folder.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with `PORT=5000`.
4. Run `npx ts-node src/app.ts` to start the server.
5. Use Postman/Hoppscotch to test endpoints.

##  Sample Endpoints

- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`
- `POST /api/books/import` (CSV upload)

## testing API

- you can test all the API using this postman collection

- How to Use:
1. Open Postman
2. Click "Import"
3. Choose the file BooksManagementAPI.postman_collection.json
4. You’ll see all pre-configured requests (GET, POST, PUT, DELETE, CSV Import) ready to test.


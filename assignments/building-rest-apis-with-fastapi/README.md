# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small REST API with FastAPI and learn how HTTP methods, request models, and status codes work together. You will create and manage a collection of books using clear, predictable endpoints.

## 📝 Tasks

### 🛠️ Create the API and Add Books

#### Description
Create a FastAPI application for managing books. Define a Pydantic model for a book and add endpoints to list all books and add a new book.

#### Requirements
Completed program should:

- Define a `Book` model with an integer `id`, a non-empty `title`, and a non-empty `author`
- Provide `GET /books` to return the current list of books, initially empty
- Provide `POST /books` to add a book from a JSON request body and return the created book
- Use FastAPI request validation so missing or invalid book fields receive a client error response
- Start successfully with the FastAPI development server and expose its interactive API documentation


### 🛠️ Complete Book Management

#### Description
Extend the API so clients can retrieve, update, and remove an individual book by its ID. Use the HTTP method and response behavior that best matches each operation.

#### Requirements
Completed program should:

- Provide `GET /books/{book_id}` to return the matching book
- Provide `PUT /books/{book_id}` to replace a book's title and author
- Provide `DELETE /books/{book_id}` to remove a book
- Return HTTP `404 Not Found` when a requested book ID does not exist
- Return a successful response for each completed operation, including a clear response for deletion

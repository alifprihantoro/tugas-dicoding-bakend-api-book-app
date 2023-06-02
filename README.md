# tugas-dicoding-bakend-api-book-app
This is a backend API project from dicoding. This API performs CRUD operations on books.

## Technologies

This project uses the following technologies:

- Node.js
- TypeScript
- @hapi/hapi
- uuid
- jest
- eslint
- prettier
- husky

## Installation

To install this project, follow these steps:

1. Clone this repository: `git clone git@github.com:alifprihantoro/tugas-dicoding-bakend-api-book-app.git`
2. Install the dependencies: `npm install`
3. Compile the TypeScript files: `npm run production`

## Usage

To run this project, follow these steps:

1. Start the server: `npm start`
2. Use a tool like Postman or curl to send requests to the API endpoints.

## Testing

To test this project, follow these steps:

1. Run the test suite: `npm test`
2. Check the test coverage and results.

## Formatting

To format this project, follow these steps:

1. Run the prettier command: `npm run format`
2. Check the formatted files in the src directory.

## how use api
API for storing, retrieving, updating, and deleting book data.

## Table of Contents

- [Saving a Book](#saving-a-book)
- [Retrieving All Books](#retrieving-all-books)
- [Retrieving Book Details](#retrieving-book-details)
- [Updating Book Data](#updating-book-data)
- [Deleting a Book](#deleting-a-book)

## Saving a Book

To save a new book, send a POST request to `/books`.

### Request

- Method: POST
- URL: /books
- Request Body:

```json
{
    "name": "string",
    "year": 2023,
    "author": "string",
    "summary": "string",
    "publisher": "string",
    "pageCount": 100,
    "readPage": 25,
    "reading": true
}
```

### Response

- Status Code: 201
- Response Body:

```json
{
    "status": "success",
    "message": "Book successfully added",
    "data": {
        "bookId": "1L7ZtDUFeGs7VlEt"
    }
}
```

If the request fails due to missing properties, the server will respond with:

- Status Code: 400
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to add book. Please provide the book name"
}
```

If the client includes a value of `readPage` that is greater than `pageCount`, the server will respond with:

- Status Code: 400
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to add book. The value of readPage cannot be greater than pageCount"
}
```

## Retrieving All Books

To retrieve all stored books, send a GET request to `/books`.

### Request

- Method: GET
- URL: /books

### Response

- Status Code: 200
- Response Body:

```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "Qbax5Oy7L8WKf74l",
                "name": "Book A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "1L7ZtDUFeGs7VlEt",
                "name": "Book B",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "K8DZbfI-t3LrY7lD",
                "name": "Book C",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

If no books have been added yet, the server will respond with an empty array:

- Status Code: 200
- Response Body:

```json
{
    "status": "success",
    "data": {
        "books": []
    }
}
```

## Retrieving Book Details

To retrieve the details of a book based on its ID, send a GET request to `/books/{bookId}`.

### Request

- Method: GET
- URL: /books/{bookId}

### Response

If the book with the given ID is found:

- Status Code: 200
- Response Body:

```json
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Book A Revised",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```

If the book with the given ID is not found:

- Status Code: 404
- Response Body:

```json
{
    "status": "fail",
    "message": "Book not found"
}
```

## Updating Book Data

To update the data of a book based on its ID, send a PUT request to `/books/{bookId}`.

### Request

- Method: PUT
- URL: /books/{bookId}
- Request Body:

```json
{
    "name": "string",
    "year": 2023,
    "author": "string",
    "summary": "string",
    "publisher": "string",
    "pageCount": 100,
    "readPage": 25,
    "reading": true
}
```

### Response

If the book with the given ID is found and successfully updated:

- Status Code: 200
- Response Body:

```json
{
    "status": "success",
    "message": "Book successfully updated"
}
```

If the request fails due to missing properties, the server will respond with:

- Status Code: 400
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to update book. Please provide the book name"
}
```

If the client includes a value of `readPage` that is greater than `pageCount`, the server will respond with:

- Status Code: 400
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to update book. The value of readPage cannot be greater than pageCount"
}
```

If the book with the given ID is not found:

- Status Code: 404
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to update book. ID not found"
}
```

## Deleting a Book

To delete a book based on its ID, send a DELETE request to `/books/{bookId}`.

### Request

- Method: DELETE
- URL: /books/{bookId}

### Response

If the book with the given ID is found and successfully deleted:

- Status Code: 200
- Response Body:

```json
{
    "status": "success",
    "message": "Book successfully deleted"
}
```

If the book with the given ID is not found:

- Status Code: 404
- Response Body:

```json
{
    "status": "fail",
    "message": "Failed to delete book. ID not found"
}
```

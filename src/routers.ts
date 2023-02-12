import { changeBook } from './handler/changeBook'
import { addNoteHandler } from './handler/addBook'
import { getAllNoteHandler } from './handler/getAllBooks'
import { getDetailBook } from './handler/getDetailBook'
import deleteBook from './handler/deleteBook'

export const routes = [
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: changeBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
]

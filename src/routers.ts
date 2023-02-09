import { changeBook } from './handler/changeBook'
import { addNoteHandler } from './handler/addBook'
import { getAllNoteHandler } from './handler/getAllBooks'
import { getDetailBook } from './handler/getDetailBook'

export const routes = [
  {
    method: 'POST',
    path: '/notes/{id}',
    handler: changeBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getDetailBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
]

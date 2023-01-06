import { IncomingMessage } from 'http'
import { routerDataBookTypes, routersReturnType } from '../types/book'
import getDbBook from '../utils/getBookList'

export default function showBook(request: IncomingMessage): routersReturnType {
  // middleware taruh sini
  const url = request.url as string
  const BOOKS_LIST_FULL = getDbBook() as routerDataBookTypes[]
  // cek url
  if (url !== '/book') {
    // cek apakah url id valid
    const id = url.replace(/.*\/book\/(.*?)/i, '$1')
    const isIdBook = BOOKS_LIST_FULL.some((data) => data.id === id)
    if (isIdBook) {
      const FILTER_BOOKS = BOOKS_LIST_FULL.filter((data) => {
        return data.id === id
      })
      return {
        code: 201,
        body: {
          status: 'success',
          data: {
            book: FILTER_BOOKS[0],
          },
        },
      }
    }
    return {
      code: 404,
      body: {
        status: 'fail',
        message: 'Buku tidak ditemukan',
      },
    }
  }
  const BOOKS_LIST = BOOKS_LIST_FULL.map(({ id, name, publisher }) => {
    return { id, name, publisher }
  })
  return {
    code: 200,
    body: {
      status: 'success',
      data: {
        books: BOOKS_LIST,
      },
    },
  }
}

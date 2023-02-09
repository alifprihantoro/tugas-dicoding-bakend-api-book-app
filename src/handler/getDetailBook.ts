import { notes } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const getDetailBook = (request: Request, h: ResponseToolkit) => {
  const GET_ID = request.params.id
  const LIST_NOTES = notes.map((book) => {
    if (book.id === GET_ID) {
      return book
    }
    return
  })
  if (LIST_NOTES.length === 1 && LIST_NOTES[0] !== undefined) {
    const response = h.response({
      code: 200, body: {
        status: 'success',
        data: {
          book: LIST_NOTES[0],
        },
      },
    })
    return response
  }
  const response = h.response({
    code: 404, body: {
      status: 'fail',
      message: 'Buku tidak ditemukan',
    },
  })
  return response
}

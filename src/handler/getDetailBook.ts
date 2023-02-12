import { notes } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const getDetailBook = (request: Request, h: ResponseToolkit) => {
  const GET_ID = request.params.id
  let GET_INDEX = undefined as number | undefined
  notes.forEach((book, i) => {
    if (book.id === GET_ID) {
      GET_INDEX = i
    }
  })
  if (GET_INDEX !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book: notes[GET_INDEX],
      },
    }).code(200)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404)
  return response
}

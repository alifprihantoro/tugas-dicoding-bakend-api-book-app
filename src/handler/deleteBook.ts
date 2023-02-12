import { Request, ResponseToolkit } from '@hapi/hapi'
import { notes } from '../notes'

export default function deleteBook(request: Request, h: ResponseToolkit) {
  const GET_ID = request.params.id
  let DELETE_INDEX = undefined as number | undefined
  notes.forEach((book, i) => {
    if (book.id === GET_ID) {
      DELETE_INDEX = i
    }
  })
  if (typeof DELETE_INDEX === 'number') {
    const response = h.response({
      code: 404, body: {
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      },
    })
    if (DELETE_INDEX === 0) {
      notes.splice(DELETE_INDEX, DELETE_INDEX + 1)
      return response
    }
    notes.splice(DELETE_INDEX, DELETE_INDEX - 1)
    return response
  }
  return h.response({
    code: 404, body: {
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    },
  })
}

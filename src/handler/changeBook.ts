import { notes, notesTypes, notesTypesReq } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'
import cekReqUsr from '../middleware/cekReqUsr'

export const changeBook = (request: Request, h: ResponseToolkit) => {
  const GET_ID = request.params.id
  const { name, pageCount, readPage } = request.payload as notesTypesReq
  let FOUND_ID_BOOK: boolean | number = false
  const LIST_NOTES = notes.map((book, i) => {
    if (book.id === GET_ID) {
      FOUND_ID_BOOK = i
      return { ...book, name, pageCount, readPage }
    }
    return book
  })
  if (FOUND_ID_BOOK !== false) {
    return h.response(cekReqUsr(request, {
      METHODS: 'Mengubah', callBack: () => {
        notes.length = 0
        notes.push(...LIST_NOTES)
      },
      DATA_PREV: request.payload as notesTypes,
    }))
  }
  const response = h.response({
    code: 404, body: {
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    },
  })
  return response
}

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
    const { body, code } = cekReqUsr(request, {
      METHODS: ['diperbarui', 'memperbarui'], callBack: () => {
        notes.length = 0
        notes.push(...LIST_NOTES)
      },
      DATA_PREV: request.payload as notesTypes,
    })
    const CODE = code === 201 ? 200 : code
    return h.response(body).code(CODE)
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }).code(404)
  return response
}

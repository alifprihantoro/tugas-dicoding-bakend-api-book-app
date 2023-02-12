import { Request, ResponseToolkit } from '@hapi/hapi'
import cekReqUsr from '../middleware/cekReqUsr'
import { notes, notesTypes } from '../notes'

export const addNoteHandler = (request: Request, h: ResponseToolkit) => {
  const { body, code } = cekReqUsr(request, {
    METHODS: ['ditambahkan', 'menambahkan'], callBack: (data: notesTypes) => {
      notes.push(data)
    },
  })
  return h.response(body).code(code)
}

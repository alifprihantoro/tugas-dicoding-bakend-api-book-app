import { Request, ResponseToolkit } from '@hapi/hapi'
import cekReqUsr from '../middleware/cekReqUsr'
import { notes, notesTypes } from '../notes'

export const addNoteHandler = (request: Request, h: ResponseToolkit) => {
  return h.response(cekReqUsr(request, {
    METHODS: 'Menambah', callBack: (data: notesTypes) => {
      notes.push(data)
    },
  }))
}

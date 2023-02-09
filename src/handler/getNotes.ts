import { notes } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const getAllNoteHandler = (_: Request, h: ResponseToolkit) => {
  const response = h.response({ error: false, data: notes})
  return response
}

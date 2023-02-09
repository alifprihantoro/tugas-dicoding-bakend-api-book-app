import { notes } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const getAllNoteHandler = (_: Request, h: ResponseToolkit) => {
  const LIST_NOTES = notes.map(({ id, name, publisher }) => {
    return { id, name, publisher }
  })
  const response = h.response({
    code: 200, body: {
      status: 'success',
      data: {
        books: LIST_NOTES,
      },
    },
  })
  return response
}

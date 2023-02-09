import { addNoteHandler } from '../handler/addNote'

export const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
]

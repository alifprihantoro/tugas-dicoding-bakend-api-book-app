import { notes, notesTypesReq } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const addNoteHandler = (request: Request, h: ResponseToolkit) => {
  const getReq = request.payload as string
  const { name, year, author, summary, publisher, pageCount, reading, readPage } = JSON.parse(getReq) as notesTypesReq
  const id = '142134'
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt
  const finished = pageCount === readPage
  const newNote = {
    name, year, author, summary, publisher, pageCount, reading, readPage, id, insertedAt, updatedAt, finished,
  }
  const isNameUnique = notes.filter((note) => note.id === id).length > 0
  notes.push(newNote)
  const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' })
  return response
}

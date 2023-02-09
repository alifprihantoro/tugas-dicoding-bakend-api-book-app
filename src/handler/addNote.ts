import { notes, notesTypes } from '../notes'
import { nanoid } from 'nanoid'

interface request {
  payload: notesTypes
}
export const addNoteHandler = (request: request) => {
  const { title, tags, body } = request.payload
  const id = nanoid(16)
  const createdAt = new Date().toISOString()
  const updatedAt = createdAt
  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  }
  notes.push(newNote)
  const isSuccess = notes.filter((note) => note.id === id).length > 0
  return isSuccess
}

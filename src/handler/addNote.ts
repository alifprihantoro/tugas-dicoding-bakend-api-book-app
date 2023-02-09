import { notes, notesTypesReq } from '../notes'
import { Request, ResponseToolkit } from '@hapi/hapi'
import cekPostObject from '../middleware/cekPostObject'
import { v4 as uuidv4 } from 'uuid'

export const addNoteHandler = (request: Request, h: ResponseToolkit) => {
  const isRequestGood = request.payload !== undefined && typeof request.payload == 'object'
  if (isRequestGood) {
    const GET_REQ = request.payload
    const { name, year, author, summary, publisher, pageCount, reading, readPage } = GET_REQ as notesTypesReq
    const id = uuidv4()
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt
    const finished = pageCount === readPage
    const newNote = {
      name, year, author, summary, publisher, pageCount, reading, readPage, id, insertedAt, updatedAt, finished,
    }
    const statusCode = cekPostObject(newNote)
    if (statusCode?.code === 400) {
      const response = h.response(statusCode)
      return response
    }
    notes.push(newNote)
    const response = h.response({
      code: 201, body: {
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      },
    })
    return response
  }
  const response = h.response({ code: 500, body: { status: 'error', message: 'Buku gagal ditambahkan' } })
  return response
}

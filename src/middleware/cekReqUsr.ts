import { notesTypes, notesTypesReq } from '../notes'
import { Request } from '@hapi/hapi'
import { v4 as uuidv4 } from 'uuid'
import cekPostObject from '../middleware/cekPostObject'
interface props {
  METHODS: string
  callBack?: (data: notesTypes) => void
  DATA_PREV?: notesTypes
}
export default function cekReqUsr(request: Request, { METHODS, callBack, DATA_PREV }: props) {
  const isRequestGood = request.payload !== undefined && typeof request.payload == 'object'
  if (isRequestGood) {
    const GET_REQ = request.payload
    const { name, year, author, summary, publisher, pageCount, reading, readPage } = METHODS === 'Menambah' ? GET_REQ as notesTypesReq : DATA_PREV as notesTypes
    const id = uuidv4()
    const insertedAt = METHODS === 'Menambah' ? new Date().toISOString() : DATA_PREV?.insertedAt as string
    const updatedAt = METHODS !== 'Menambah' ? new Date().toISOString() : insertedAt
    const finished = pageCount === readPage
    const newNote = {
      name, year, author, summary, publisher, pageCount, reading, readPage, id, insertedAt, updatedAt, finished,
    }
    const statusCode = cekPostObject(newNote, METHODS)
    if (statusCode?.code === 400) {
      return statusCode
    }
    callBack !== undefined && callBack(newNote)
    const response = {
      code: 201, body: {
        status: 'success',
        message: `Buku berhasil ${METHODS}`,
        data: {
          bookId: id,
        },
      },
    }
    return response
  }
  const response = { code: 500, body: { status: 'error', message: `Buku gagal ${METHODS}` } }
  return response
}

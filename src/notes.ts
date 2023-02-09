export interface notesTypesReq {
  name: string
  year: number
  author: string
  summary: string
  publisher: string
  pageCount: number
  readPage: number
  reading: boolean
}
export interface notesTypes extends notesTypesReq{
  id: string
  finished: boolean
  insertedAt: string
  updatedAt: string
}
export const notes = [] as notesTypes[]

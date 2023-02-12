import { notesTypes } from 'notes'

export interface returnPost {
  message: string
  status: string
  data: { bookId: string }
}
export interface returnGetAll {
  message: string
  status: string
  data: { books: notesTypes[] }
}
export interface returnGetDetail {
  message: string
  status: string
  data: { book: notesTypes }
}

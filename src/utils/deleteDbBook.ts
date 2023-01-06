import { writeFileSync } from 'fs'
import { routerDataBookTypes } from '../types/book'
import getDbBook from './getBookList'

export default function deleteDbBook(idBook: string) {
  const jsonPath = './db/book.json'
  const db = getDbBook() as routerDataBookTypes[]
  const data_sebelumnya_parser = db.filter(({ id }) => id !== idBook)
  writeFileSync(jsonPath, JSON.stringify(data_sebelumnya_parser))
}

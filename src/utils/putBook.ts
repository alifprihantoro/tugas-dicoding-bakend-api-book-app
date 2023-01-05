import { writeFileSync } from 'fs'
import { postBook, routerDataBookTypes } from '../types/book'
import getDbBook from './getBookList'

export default function postBookList(data: postBook) {
  const jsonPath = './db/book.json'
  const db = getDbBook() as routerDataBookTypes[]
  const data_sebelumnya_parser = db.filter(({ id }) => id !== data.id)
  data_sebelumnya_parser.push(data)
  writeFileSync(jsonPath, JSON.stringify(data_sebelumnya_parser))
}

import { writeFileSync } from 'fs'
import { postBook } from '../types/book'
import getDbBook from './getBookList'

export default function postBookList(data: postBook) {
  const jsonPath = './db/book.json'
  const data_sebelumnya_parser = getDbBook()
  data_sebelumnya_parser.push(data)
  writeFileSync(jsonPath, JSON.stringify(data_sebelumnya_parser))
}

import { writeFileSync, readFileSync } from 'fs'
import { postBook } from '../types/book'

export default function postBookList(data: postBook) {
  const jsonPath = './db/book.json'
  const data_sebelumnya = readFileSync(jsonPath, { encoding: 'utf8' })
  let data_sebelumnya_parser = JSON.parse(data_sebelumnya)
  data_sebelumnya_parser.push(data)
  writeFileSync(jsonPath, JSON.stringify(data_sebelumnya_parser))
}

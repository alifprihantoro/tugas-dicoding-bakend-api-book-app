import { readFileSync } from 'fs'

export default function getDbBook() {
  const jsonPath = './db/book.json'
  const data_sebelumnya = readFileSync(jsonPath, { encoding: 'utf8' })
  return JSON.parse(data_sebelumnya)
}

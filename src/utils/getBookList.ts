import { readFileSync } from 'fs'

export default function postBookList(path: string) {
  const data_sebelumnya = readFileSync(path, { encoding: 'utf8' })
  return JSON.parse(data_sebelumnya)
}

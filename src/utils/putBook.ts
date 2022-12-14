import { writeFileSync } from 'fs'
import { postBook, routerDataBookTypes } from '../types/book'
import getDbBook from './getBookList'

export default function putDbBook(data: postBook,idBook:string) {
  const jsonPath = './db/book.json'
  const db = getDbBook() as routerDataBookTypes[]
  const data_sebelumnya_parser = db.filter(({ id }) => id !== idBook)
  data_sebelumnya_parser.push({...data,id:idBook})
  writeFileSync(jsonPath, JSON.stringify(data_sebelumnya_parser))
}

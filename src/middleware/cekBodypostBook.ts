import { postBook, routersReturnType } from '../types/book'
// import { nanoid } from 'nanoid'
import postBookList from '../utils/postBook'

export default function cekBodyPostBook(data: postBook): routersReturnType {
  const cekData = [
    { name: 'nama', type: 'string', require: true },
    { name: 'year', type: 'number', require: true },
    { name: 'author', type: 'string', require: true },
    { name: 'summary', type: 'string', require: true },
    { name: 'publisher', type: 'string', require: true },
    { name: 'pageCount', type: 'number', require: true },
    { name: 'cekreadPage', type: 'number', require: true },
    { name: 'cekreading', type: 'boolean', require: true },
  ]

  let err: string[] = []
  cekData.forEach(({ name, type, require }) => {
    const cekNotEmpty = typeof data[name] == undefined && require
    const cekType = typeof data[name] != type
    cekNotEmpty && err.push(`${name} harus diisi`)
    cekType && err.push(`type ${name} harus bernilai ${type}`)
  })

  if (err.length > 0) {
    return {
      code: 400,
      body: {
        msg: err.join('\n'),
      },
    }
  }
  // write to db.json
  postBookList(data)

  return {
    code: 200,
    body: {
      msg: 'berhasil menambahkan post',
    },
  }
}

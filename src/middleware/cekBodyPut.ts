import getDbBook from 'utils/getBookList'
import { putBody, routerDataBookTypes, routersReturnType } from '../types/book'
import postBookList from '../utils/postBook'

export default function cekBodyPostBook(data: putBody): routersReturnType {
  const cekData = [
    { name: 'name', type: 'string', require: true },
    { name: 'year', type: 'number', require: true },
    { name: 'author', type: 'string', require: true },
    { name: 'summary', type: 'string', require: true },
    { name: 'publisher', type: 'string', require: true },
    { name: 'pageCount', type: 'number', require: true },
    { name: 'readPage', type: 'number', require: true },
    { name: 'reading', type: 'boolean', require: true },
  ]

  let err: string[] = []
  cekData.forEach(({ name, type, require }) => {
    const cekNotEmpty = typeof data[name] == undefined && require
    const cekType = typeof data[name] != type
    cekNotEmpty && err.push(`${name} harus diisi`)
    cekType && err.push(`type ${name} harus bernilai ${type}`)
  })
  let errMsg: string[] = []
  if (data.name?.length < 1 || data.name === undefined) {
    errMsg.push('Gagal memperbarui buku. Mohon isi nama buku')
  }
  if (data.readPage > data.pageCount || data.readPage === undefined) {
    errMsg.push('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount')
  }
  const db = getDbBook() as routerDataBookTypes[]
  const idBook = data.id
  const isIdFalid = db.some((data_db) => data_db.id === idBook)
  if (!isIdFalid) {
    errMsg.push('Gagal memperbarui buku. Id tidak ditemukan')
  }
  if (err.length > 0 || errMsg.length > 0) {
    return {
      code: 400,
      body: {
        status: 'fail',
        msg: errMsg.join('\n'),
        types: err.join('\n'),
      },
    }
  }
  const errServer = []
  // write to db.json
  try {
    const updatedAt = new Date().toISOString()
    data.updatedAt = updatedAt
    postBookList(data)
  } catch (error) {
    errServer.push('Buku gagal diperbarui')
  }
  if (errServer.length === 1) {
    return {
      code: 500,
      body: {
        status: 'error',
        msg: errServer[0],
      },
    }
  }
  return {
    code: 201,
    body: {
      status: 'success',
      msg: 'Buku berhasil diperbarui',
    },
  }
}

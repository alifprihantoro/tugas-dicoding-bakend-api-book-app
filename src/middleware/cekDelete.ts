import getDbBook from '../utils/getBookList'
import { routerDataBookTypes, routersReturnType } from '../types/book'
import deleteDbBook from '../utils/deleteDbBook'

export default function cekDeleteBody(requestUrl: string): routersReturnType {
  const db = getDbBook() as routerDataBookTypes[]
  const idBook = requestUrl.replace(/.*\/book\//i, '')
  const isIdFalid = db.some((data_db) => data_db.id === idBook)
  if (!isIdFalid) {
    return {
      code: 404,
      body: {
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      },
    }
  }
  const errServer = []
  // write to db.json
  try {
    deleteDbBook(idBook)
  } catch (error) {
    errServer.push('Buku gagal dihapus')
  }
  if (errServer.length === 1) {
    return {
      code: 500,
      body: {
        status: 'error',
        message: errServer[0],
      },
    }
  }
  return {
    code: 201,
    body: {
      status: 'success',
      message: 'Buku berhasil dihapus',
    },
  }
}

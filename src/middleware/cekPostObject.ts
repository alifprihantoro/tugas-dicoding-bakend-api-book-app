import { notesTypesReq } from '../notes'

export default function cekPostObject({ name, readPage, pageCount }: notesTypesReq) {
  const hasName = name !== undefined && typeof name === 'string'
  if (!hasName) {
    return {
      code: 400,
      body: {
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      },
    }
  }
  const isReadPage = readPage !== undefined && typeof readPage === 'number' && readPage <= pageCount
  if (!isReadPage) {
    return {
      code: 400,
      body: {
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      },
    }
  }
}

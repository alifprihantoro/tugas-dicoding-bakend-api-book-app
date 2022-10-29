import { IncomingMessage } from 'http'
import cekUrlRegex from 'utils/cekUrl'
import { routersReturnType } from '../types/book'

export default function showBook(request: IncomingMessage): routersReturnType {
  // middleware taruh sini
  const url = request.url as string
  // cek url
  if (url !== '/book') {
    // cek apakah url id valid
    if (cekUrlRegex(/^\/book\/\d+$/, url)) {
      return {
        code: 404,
        body: {
          msg: 'upcooming',
        },
      }
    }
    return {
      code: 404,
      body: {
        msg: 'url yang anda masukkan salah',
      },
    }
  }
  return {
    code: 200,
    body: {
      data: [
        {
          id: 'Qbax5Oy7L8WKf74l',
          name: 'Buku A',
          year: 2010,
          author: 'John Doe',
          summary: 'Lorem ipsum dolor sit amet',
          publisher: 'Dicoding Indonesia',
          pageCount: 100,
          readPage: 25,
          finished: false,
          reading: false,
          insertedAt: '2021-03-04T09:11:44.598Z',
          updatedAt: '2021-03-04T09:11:44.598Z',
        },
      ],
    },
  }
}

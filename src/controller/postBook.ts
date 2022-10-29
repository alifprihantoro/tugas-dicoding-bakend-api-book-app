import { IncomingMessage, ServerResponse } from 'http'
import cekBodyPostBook from '../middleware/cekBodypostBook'
import { postBook } from '../types/book'

export default function postBook(request: IncomingMessage, response?: ServerResponse): void {
  request.on('data', (chunk: any) => {
    const res = response as ServerResponse
    const data = JSON.parse(chunk.toString()) as postBook
    const cek = cekBodyPostBook(data)
    res.statusCode = cek.code
    res.end(JSON.stringify(cek.body))
  })
}

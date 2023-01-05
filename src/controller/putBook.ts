import { IncomingMessage, ServerResponse } from 'http'
import cekBodyPut from '../middleware/cekBodyPut'
import { putBody } from '../types/book'

export default function putBook(request: IncomingMessage, response?: ServerResponse): void {
  request.on('data', (chunk: any) => {
    const res = response as ServerResponse
    const data = JSON.parse(chunk.toString()) as putBody
    const cek = cekBodyPut(data)
    res.statusCode = cek.code
    res.end(JSON.stringify(cek.body))
  })
}

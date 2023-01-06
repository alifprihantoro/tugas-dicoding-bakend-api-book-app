import { IncomingMessage, ServerResponse } from 'http'
import cekDeleteBody from '../middleware/cekDelete'

export default function deleteBook(request: IncomingMessage, response?: ServerResponse): void {
  const res = response as ServerResponse
  const url: string = request.url as string
  const cek = cekDeleteBody(url)
  res.statusCode = cek.code
  res.end(JSON.stringify(cek.body))
}

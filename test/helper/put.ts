import { server } from '../../src/app'
import { returnPost } from '../../src/types/returnType'

const body = {
  name: 'Buku A',
  year: 2010,
  author: 'John Doe',
  summary: 'Lorem ipsum dolor sit amet',
  publisher: 'Dicoding Indonesia',
  pageCount: 100,
  readPage: 25,
  reading: false,
}
export default async function putApi(id: string, addBody?: object) {
  const options = {
    method: 'POST',
    url: `/books/${id}`,
    payload: JSON.stringify({ ...body, ...addBody }),
  }
  const data = await server.inject(options)
  const payload = JSON.parse(data.payload) as returnPost
  const statusCode = data.statusCode
  return { payload, statusCode }
}

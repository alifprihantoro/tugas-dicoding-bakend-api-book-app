import { server } from '../../src/app'
import { returnGetDetail } from '../../src/types/returnType'

export default async function deleteApi(id: string) {
  const options = {
    method: 'DELETE',
    url: `/books/${id}`,
  }
  const data = await server.inject(options)
  const payload = JSON.parse(data.payload) as returnGetDetail
  const statusCode = data.statusCode
  return { payload, statusCode }
}

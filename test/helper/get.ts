import { server } from '../../src/app'
import { returnGetAll } from '../../src/types/returnType'

export default async function getApi() {
  const options = {
    method: 'GET',
    url: '/books',
  }
  const data = await server.inject(options)
  const payload = JSON.parse(data.payload) as returnGetAll
  const statusCode = data.statusCode
  return { payload, statusCode }
}

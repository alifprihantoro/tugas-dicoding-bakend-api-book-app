import request from 'supertest'
import { server } from '../server'

export default async function putApi(addBody?: object, idBook?: string) {
  return await request(server)
    .put('/book/' + idBook)
    .send({...addBody })
    .set('Accept', 'application/json')
}

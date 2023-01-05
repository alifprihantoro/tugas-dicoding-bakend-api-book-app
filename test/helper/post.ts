import request from 'supertest'
import { server } from '../server'

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
export default async function postApi(addBody?:object) {
  return await request(server).post('/book')
    .send({...body,...addBody}).set('Accept', 'application/json')
}

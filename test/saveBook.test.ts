import request from 'supertest'
import { server } from './server'

describe('POST /book => not fail', () => {
  const result = async () => {
    return await request(server)
      .post('/book')
      .send({
        name: 'Buku A',
        year: 2010,
        author: 'John Doe',
        summary: 'Lorem ipsum dolor sit amet',
        publisher: 'Dicoding Indonesia',
        pageCount: 100,
        readPage: 25,
        reading: false,
      })
      .set('Accept', 'application/json')
  }
  it('cek return', async () => {
    await result().then(({ status, body }) => {
      expect(status).toBe(200)
      expect(body.msg).toBe('data berhasil ditambahkan!')
    })
  })
})

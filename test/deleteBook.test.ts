import postApi from './helper/post'
import { server } from './server'
import request from 'supertest'

describe('Test delete book :', () => {
  it('id notfound', async () => {
    const req = await request(server).delete('/book/safd').send()
    expect(req.status).toBe(404)
    expect(req.body.message).toBe('Buku gagal dihapus. Id tidak ditemukan')
    expect(req.body.status).toBe('fail')
  })
  it('delete success', async () => {
    const idBook = await postApi().then((data) => data.body.data.bookId)
    const req = await request(server)
      .delete('/book/' + idBook)
      .send()
    expect(req.status).toBe(201)
    expect(req.body.message).toBe('Buku berhasil dihapus')
    expect(req.body.status).toBe('success')
  })
})

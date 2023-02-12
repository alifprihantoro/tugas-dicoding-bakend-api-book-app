import { server } from '../src/app'
import postApi from './helper/post'

describe('POST /book :', () => {
  afterAll((done) => {
    server.events.on('stop', () => {
      done()
    })
    server.stop()
  })
  it('jika di isi benar', async () => {
    const { statusCode, payload } = await postApi()
    expect(statusCode).toBe(201)
    expect(payload.message).toBe('Buku berhasil ditambahkan')
    expect(payload.status).toBe('success')
    expect(typeof payload.data.bookId === 'string').toBe(true)
  })
  it('jika nama kosong', async () => {
    const { statusCode, payload } = await postApi({ name: '' })
    expect(statusCode).toBe(400)
    expect(payload.message).toBe('Gagal menambahkan buku. Mohon isi nama buku')
    expect(payload.status).toBe('fail')
  })
  it('jika readPage lebih besar dari pageCount', async () => {
    const { statusCode, payload } = await postApi({ readPage: 101 })
    expect(statusCode).toBe(400)
    expect(payload.message).toBe(
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    )
    expect(payload.status).toBe('fail')
  })
})

import { server } from '../src/app'
import postApi from './helper/post'
import putApi from './helper/put'

describe('PUT /book :', () => {
  afterAll((done) => {
    server.events.on('stop', () => {
      done()
    })
    server.stop()
  })
  it('jika di isi benar', async () => {
    const id = await postApi().then(e => e.payload.data.bookId)
    const { payload, statusCode } = await putApi(id)
    expect(statusCode).toBe(200)
    expect(payload.message).toBe('Buku berhasil diperbarui')
    expect(payload.status).toBe('success')
    expect(typeof payload.data.bookId === 'string').toBe(true)
  })
  it('jika id salah', async () => {
    const { payload, statusCode } = await putApi('randomid')
    expect(statusCode).toBe(404)
    expect(payload.message).toBe('Gagal memperbarui buku. Id tidak ditemukan')
    expect(payload.status).toBe('fail')
  })
  it('jika nama kosong', async () => {
    const id = await postApi().then(e => e.payload.data.bookId)
    const { payload, statusCode } = await putApi(id, { name: '' })
    expect(statusCode).toBe(400)
    expect(payload.message).toBe('Gagal memperbarui buku. Mohon isi nama buku')
    expect(payload.status).toBe('fail')
  })
  it('jika readPage lebih besar dari pageCount', async () => {
    const id = await postApi().then(e => e.payload.data.bookId)
    const { payload, statusCode } = await putApi(id, { readPage: 101 })
    expect(statusCode).toBe(400)
    expect(payload.message).toBe(
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    )
    expect(payload.status).toBe('fail')
  })
})

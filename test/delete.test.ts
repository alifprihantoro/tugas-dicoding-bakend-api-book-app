import { server } from '../src/app'
import deleteApi from './helper/delete'
import postApi from './helper/post'

describe('POST /book :', () => {
  afterAll((done) => {
    server.events.on('stop', () => {
      done()
    })
    server.stop()
  })
  it('id not found', async () => {
    const { payload, statusCode } = await deleteApi('randomid')
    expect(statusCode).toBe(404)
    expect(payload.status).toBe('fail')
    expect(payload.message).toBe('Buku gagal dihapus. Id tidak ditemukan')
  })
  it('berhasil!!', async () => {
    const id = await postApi().then(e => e.payload.data.bookId)
    const { payload, statusCode } = await deleteApi(id)
    expect(statusCode).toBe(200)
    expect(payload.status).toBe('success')
    expect(payload.message).toBe('Buku berhasil dihapus')
  })
})

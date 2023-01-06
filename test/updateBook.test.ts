import postApi from './helper/post'
import putApi from './helper/put'
const bodyDefault = {
  name: 'Berubah',
  year: 2010,
  author: 'John Doe',
  summary: 'Lorem ipsum dolor sit amet',
  publisher: 'Dicoding Indonesia',
  pageCount: 100,
  readPage: 25,
  reading: false,
}
describe('Test update book :', () => {
  beforeEach((): void => {
    jest.setTimeout(150000)
  })
  it('nama tidak ada', async () => {
    const idBook = await postApi().then((data) => data.body.data.bookId)
    await putApi({ ...bodyDefault, name: '' }, idBook).then(({ status, body }) => {
      expect(status).toBe(400)
      expect(body.message).toBe('Gagal memperbarui buku. Mohon isi nama buku')
      expect(body.status).toBe('fail')
    })
  })
  it('readPage melebihi pageCount', async () => {
    const idBook = await postApi().then((data) => data.body.data.bookId)
    await putApi({ ...bodyDefault, readPage: 101 }, idBook).then(({ status, body }) => {
      expect(status).toBe(400)
      expect(body.message).toBe('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount')
      expect(body.status).toBe('fail')
    })
  })
  it('id notfound', async () => {
    await putApi( bodyDefault , 'fsaf').then(({ status, body }) => {
      console.log(body)
      expect(status).toBe(400)
      expect(body.message).toBe('Gagal memperbarui buku. Id tidak ditemukan')
      expect(body.status).toBe('fail')
    })
  })
  it('id notfound', async () => {
    const idBook = await postApi().then((data) => data.body.data.bookId)
    await putApi( bodyDefault , idBook).then(({ status, body }) => {
      console.log(body)
      expect(status).toBe(201)
      expect(body.message).toBe('Buku berhasil diperbarui')
      expect(body.status).toBe('success')
    })
  })
})

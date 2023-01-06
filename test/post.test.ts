import postApi from './helper/post'

describe('POST /book => not fail', () => {
  it('jika di isi benar', () => {
    postApi().then(({ status, body }) => {
      expect(status).toBe(201)
      expect(body.msg).toBe('Buku berhasil ditambahkan')
      expect(body.status).toBe('success')
      expect(typeof body.data.bookId === 'string').toBe(true)
    })
  })
  it('jika nama kosong', async () => {
    await postApi({ name: '' }).then(({ status, body }) => {
      console.log(status)
      console.log(body)
      expect(status).toBe(400)
      expect(body.message).toBe('Gagal menambahkan buku. Mohon isi nama buku')
      expect(body.status).toBe('fail')
    })
  })
  it('jika readPage lebih besar dari pageCount', async () => {
    await postApi({ readPage: 101 }).then(({ status, body }) => {
      expect(status).toBe(400)
      expect(body.message).toBe(
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      )
      expect(body.status).toBe('fail')
    })
  })
})

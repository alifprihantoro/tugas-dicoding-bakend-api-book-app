import postApi from './helper/post'
import putApi from './helper/put'

describe('Test update book :', () => {
  beforeEach((): void => {
    jest.setTimeout(150000)
  })
  it('nama tidak ada', async () => {
    const idBook = await postApi().then((data) => data.body.data.bookId)
    await putApi(
      {
        year: 2010,
        author: 'John Doe',
        summary: 'Lorem ipsum dolor sit amet',
        publisher: 'Dicoding Indonesia',
        pageCount: 100,
        readPage: 25,
        reading: false,
      },
      idBook,
    ).then(({ status, body }) => {
      expect(status).toBe(400)
      expect(body.msg).toBe('Gagal memperbarui buku. Mohon isi nama buku')
      expect(body.status).toBe('fail')
    })
  })
})

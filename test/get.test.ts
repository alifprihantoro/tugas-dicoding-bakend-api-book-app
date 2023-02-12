import { server } from '../src/app'
import { notesTypes } from '../src/notes'
import getApi from './helper/get'
import getDetailApi from './helper/getDetail'
import postApi from './helper/post'

describe('Test Get APi :', () => {
  afterAll((done) => {
    server.events.on('stop', () => {
      done()
    })
    server.stop()
  })
  it('if list no data', async () => {
    const { payload, statusCode } = await getApi()
    expect(statusCode).toBe(200)
    expect(payload.status).toBe('success')
    expect(payload.data.books.length === 0).toBe(true)
  })
  it('Request /book should return list book', async () => {
    await postApi()
    const { payload, statusCode } = await getApi()
    expect(statusCode).toBe(200)
    expect(payload.status).toBe('success')
    expect(payload.data.books.length > 0).toBe(true)
    const firstBook = payload.data.books[0] as notesTypes
    expect(typeof firstBook.id === 'string').toBe(true)
    expect(typeof firstBook.name === 'string').toBe(true)
    expect(typeof firstBook.publisher === 'string').toBe(true)
  })
  it('detail not found', async () => {
    const { payload, statusCode } = await getDetailApi('randomid')
    expect(statusCode).toBe(404)
    expect(payload.status).toBe('fail')
    expect(payload.message).toBe('Buku tidak ditemukan')
  })
  it('detail found', async () => {
    const id = await postApi().then(e => {
      return e.payload.data.bookId
    })
    const { payload, statusCode } = await getDetailApi(id)
    expect(statusCode).toBe(201)
    expect(payload.status).toBe('success')
    const firstBook = payload.data.book as notesTypes
    expect(typeof firstBook.id === 'string').toBe(true)
    expect(typeof firstBook.name === 'string').toBe(true)
    expect(typeof firstBook.year === 'number').toBe(true)
    expect(typeof firstBook.author === 'string').toBe(true)
    expect(typeof firstBook.summary === 'string').toBe(true)
    expect(typeof firstBook.publisher === 'string').toBe(true)
    expect(typeof firstBook.pageCount === 'number').toBe(true)
    expect(typeof firstBook.readPage === 'number').toBe(true)
    expect(typeof firstBook.finished === 'boolean').toBe(true)
    expect(typeof firstBook.reading === 'boolean').toBe(true)
    expect(typeof firstBook.insertedAt === 'string').toBe(true)
    expect(typeof firstBook.updatedAt === 'string').toBe(true)
  })
})

import { writeFileSync } from 'fs'
import request from 'supertest'
import {routerDataBookTypes} from '../src/types/book'
import postApi from './helper/post'
import { server } from './server'

describe('Test Get APi :', () => {
  it('Request /book should return list book', async () => {
    postApi()
    const result = await request(server).get('/book').send()
    expect(result.status).toBe(200)
    expect(result.body.status).toBe('success')
    expect(result.body.data.books.length > 0).toBe(true)
    const firstBook = result.body.data.books[0] as routerDataBookTypes
    expect(typeof firstBook.id === 'string').toBe(true)
    expect(typeof firstBook.name === 'string').toBe(true)
    expect(typeof firstBook.publisher === 'string').toBe(true)
  })
  it('if list no data', async () => {
    writeFileSync('./db/book.json', '[]')
    const result = await request(server).get('/book').send()
    expect(result.status).toBe(200)
    expect(result.body.status).toBe('success')
    expect(result.body.data.books.length === 0).toBe(true)
  })
  it('detail not found', async () => {
    const result = await request(server).get('/book/sadf').send()
    expect(result.status).toBe(404)
    expect(result.body.status).toBe('fail')
    expect(result.body.message).toBe('Buku tidak ditemukan')
  })
  it('detail found', async () => {
    const idBook = await postApi().then((data) => {
      return data.body.data.bookId
    })
    const result = await request(server)
      .get('/book/' + idBook)
      .send()
    expect(result.status).toBe(201)
    expect(result.body.status).toBe('success')
    const firstBook = result.body.data.book as routerDataBookTypes
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

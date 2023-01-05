import { IncomingMessage, ServerResponse } from 'http'
interface IObjectKeys {
  [key: string]: string | number | boolean
}
/**
 * this type :
 *
 * @param code: number
 * @param body: {
 *   data<optional>: [{
 *   id: string  name: string
 *   year: number
 *   author: string
 *   summary: string
 *   publisher: string
 *   pageCount: number
 *   readPage: number
 *   finished: boolean
 *   reading: boolean
 *   insertedAt: string
 *   updatedAt: string
 *  }]
 *  msg<optional>: string
 * }
 */
export interface routersReturnType {
  code: number
  body: routerBodyTypes
}
export interface postBook extends IObjectKeys {
  name: string
  year: number
  author: string
  summary: string
  publisher: string
  pageCount: number
  readPage: number
  finished: boolean
  reading: boolean
}
export interface putBody extends postBook {
  id:string
}

export interface routerDataBookTypes {
  id?: string
  name?: string
  year?: number
  author?: string
  summary?: string
  publisher?: string
  pageCount?: number
  readPage?: number
  finished?: boolean
  reading?: boolean
  insertedAt?: string
  updatedAt?: string
  bookId?: string
}
export interface data_books {
  books: routerDataBookTypes[]
}
export interface routerBodyTypes {
  data?: data_books | routerDataBookTypes
  types?: string
  msg?: string
  status?: string
}
export interface routersType {
  method: string
  return: (request: IncomingMessage, response?: ServerResponse) => void | routersReturnType
}

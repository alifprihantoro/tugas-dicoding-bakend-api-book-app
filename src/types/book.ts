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
  nama: string
  year: number
  author: string
  summary: string
  publisher: string
  pageCount: number
  readPage: number
  finished: boolean
  reading: boolean
}

export interface routerDataBookTypes {
  id: string
  name: string
  year: number
  author: string
  summary: string
  publisher: string
  pageCount: number
  readPage: number
  finished: boolean
  reading: boolean
  insertedAt: string
  updatedAt: string
}
export interface routerBodyTypes {
  data?: routerDataBookTypes[]
  msg?: string
}
export interface routersType {
  method: string
  return: (request: IncomingMessage, response?: ServerResponse) => void | routersReturnType
}


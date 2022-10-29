import { IncomingMessage, ServerResponse } from 'http'
import { routersType, routerBodyTypes, routersReturnType } from '../types/book'

export default class responseApi {
  private routers: routersType[]
  private method: string
  private request: IncomingMessage
  private url: string
  private res: ServerResponse

  constructor(response: ServerResponse, routers: routersType[], request: IncomingMessage) {
    const { method, url } = request
    this.routers = routers
    this.method = method as string
    this.request = request
    this.url = url as string
    this.res = response

    this.responseToClien()
  }

  // response to client
  responseToClien(): void {
    const isMethotEmpety: boolean = this.method === undefined
    const method: string[] = this.routers.map((data) => data.method)
    let code_: number[] = []
    let body_: routerBodyTypes[] = []

    // show info user get/post on were
    console.info(this.method + ':' + this.url)

    // cek method
    for (let i = 0; i < method.length; i++) {
      // kusus untuk get
      if ('GET' === this.method) {
        const { code, body } = this.routers[i].return(this.request) as routersReturnType
        code_.push(code)
        body_.push(body)
        break
      }
      // selain get
      if (method[i] === this.method) {
        this.routers[i].return(this.request, this.res)
        return
      }
    }
    // method not found
    if (isMethotEmpety) {
      code_.push(404)
      body_.push({
        msg: `Harap masukkan method saat pengambilan api`,
      })
    }
    const isMethotGood: boolean = code_.toString() === ''
    if (isMethotGood) {
      code_.push(404)
      body_.push({
        msg: `Halaman tidak dapat diakses dengan ${this.method} request`,
      })
    }
    this.res.statusCode = code_[0]
    this.res.end(JSON.stringify(body_[0]))
  }
}

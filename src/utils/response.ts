import { routersType, routerBodyTypes } from '../types/book'

export default class responseApi {
  private routers: routersType[]
  private method: string
  private request: string

  constructor(response: any, routers: routersType[], request: any) {
    const { method } = request

    this.routers = routers
    this.method = method
    this.request = request

    const { code, body } = this.cekMethod()
    response.statusCode = code
    response.end(JSON.stringify(body))
  }
  cekMethod() {
    const isMethotEmpety = this.method === undefined
    console.log(this.method)
    console.log(isMethotEmpety)
    const method = this.routers.map((data) => data.method)
    let code: number[] = []
    let body: routerBodyTypes[] = []
    for (let i = 0; i < method.length; i++) {
      if (method[i] === this.method) {
        code.push(this.routers[i].return(this.request).code)
        body.push(this.routers[i].return(this.request).body)
        break
      }
    }
    // method not found
    console.log(this.method)
    
    if (isMethotEmpety) {
      code.push(404)
      body.push({
        msg: `Harap masukkan method saat pengambilan api`,
      })
    } 
    const isMethotGood = code.toString() === ''
    if (isMethotGood) {
      code.push(404)
      body.push({
        msg: `Halaman tidak dapat diakses dengan ${this.method} request`,
      })
    }
    return { code: code[0], body: body[0] }
  }
}

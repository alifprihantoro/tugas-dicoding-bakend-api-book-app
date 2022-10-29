import { IncomingMessage, ServerResponse } from 'http'
import home from '../controller/home'
import responseApi from '../utils/response'

export default class homeRouter {
  constructor(request: IncomingMessage, response: ServerResponse) {
    const routers = [
      {
        method: 'GET',
        return: home,
      },
    ]
    new responseApi(response, routers, request)
  }
}

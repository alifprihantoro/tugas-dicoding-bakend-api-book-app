import { IncomingMessage, ServerResponse } from 'http'
import bookRouters from '../routers/book'
import homeRouter from '../routers/home'
import cekUrlRegex from '../utils/cekUrl'

export const requestListener = (request: IncomingMessage, response: ServerResponse) => {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('X-Powered-By', 'NodeJS')
  if (cekUrlRegex(/^\/book/, request.url as string)) {
    new bookRouters(request, response)
    return
  }
  if (request.url === '/') {
    new homeRouter(request, response)
    return
  }
  // 404 notfount url
  if (cekUrlRegex(/.*/, request.url as string)) {
    new homeRouter(request, response)
    return
  }
}

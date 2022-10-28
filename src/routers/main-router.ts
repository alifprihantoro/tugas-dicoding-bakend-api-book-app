import bookRouters from '../routers/book'
import homeRouter from '../routers/home'
import cekUrlRegex from '../utils/cekUrl'

export const requestListener = (request: any, response: any) => {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('X-Powered-By', 'NodeJS')
  if (cekUrlRegex(/^\/book/, request.url)) {
    new bookRouters(request, response)
    return
  }
  if (request.url === '/') {
    console.log('home')
    new homeRouter(request, response)
    return
  }
  // 404 notfount url
  if (cekUrlRegex(/.*/, request.url)) {
    new homeRouter(request, response)
    return
  }
}

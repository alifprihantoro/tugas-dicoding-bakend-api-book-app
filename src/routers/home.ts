import showBook from '../controller/showBook'
import responseApi from '../utils/response'

export default class homeRouter {
  constructor(request: Request, response: Response) {
    const routers = [
      {
        method: 'GET',
        return: showBook,
      },
    ]
    new responseApi(response, routers, request)
  }
}

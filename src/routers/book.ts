import putBook from "../controller/putBook";
import postBook from "../controller/postBook";
import showBook from "../controller/showBook";
import responseApi from "../utils/response";
import deleteBook from "../controller/deleteBook";

export default class bookRouters {
  constructor(request: any, response: any) {
    const routers = [
      {
        method: "GET",
        return: showBook,
      },
      {
        method: "POST",
        return: postBook,
      },
      {
        method: "PUT",
        return: putBook,
      },
      {
        method: "DELETE",
        return: deleteBook,
      },
      {
        method: "",
        return: showBook,
      },
    ];
    new responseApi(response, routers, request);
  }
}

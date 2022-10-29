import postBook from "../controller/postBook";
import showBook from "../controller/showBook";
import responseApi from "../utils/response";

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
        return: showBook,
      },
      {
        method: "DELETE",
        return: showBook,
      },
      {
        method: "",
        return: showBook,
      },
    ];
    new responseApi(response, routers, request);
  }
}

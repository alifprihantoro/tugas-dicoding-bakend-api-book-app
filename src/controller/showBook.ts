import { routersReturnType } from "../types/book";

export default function showBook(): routersReturnType {
  // middleware taruh sini
  return {
    code: 200,
    body: {
      data: [
        {
          title: "book1",
          author: "author1",
        },
        {
          title: "book2",
          author: "author2",
        },
      ],
    },
  };
}

interface routersReturnType {
  code: number
  body: routerBodyTypes
}

interface routerDataBookTypes {
  title: string
  author: string
}
interface routerBodyTypes {
  data?: routerDataBookTypes[]
  msg?: string
}
interface routersType {
  method: string
  return: (request: any) => routersReturnType
}

export { routersType, routerDataBookTypes, routerBodyTypes, routersReturnType }

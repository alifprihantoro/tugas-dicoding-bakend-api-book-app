import { routersReturnType } from '../types/book'
export default function home(): routersReturnType {
  return {
    code: 200,
    body: {
      msg: 'welcome to home!',
    },
  }
}

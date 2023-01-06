import { routersReturnType } from '../types/book'
export default function home(): routersReturnType {
  return {
    code: 200,
    body: {
      message: 'welcome to home!',
    },
  }
}

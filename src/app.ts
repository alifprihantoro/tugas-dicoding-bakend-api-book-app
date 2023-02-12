import Hapi from '@hapi/hapi'
import { routes } from './routers'

export const server = Hapi.server({
  port: 9000,
  host: 'localhost',
})
const init = async () => {
  server.route(routes)
  await server.start()
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

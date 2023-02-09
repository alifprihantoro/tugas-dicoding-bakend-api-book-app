import Hapi from '@hapi/hapi'
import { routes } from './routers/post'

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  })
  server.route(routes)
  await server.start()
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

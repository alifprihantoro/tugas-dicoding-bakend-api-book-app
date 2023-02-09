import Hapi from '@hapi/hapi'

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  })

  await server.start()
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

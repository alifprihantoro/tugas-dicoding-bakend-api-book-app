import * as http from 'http'
import {requestListener} from './routers/main-router'

export let server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})

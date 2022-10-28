import * as http from 'http'
import { requestListener } from "../src/routers/main-router";

export let app = http
export let server = app.createServer(requestListener)

const port = 5001
const host = 'localhost'
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})

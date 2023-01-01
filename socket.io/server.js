const http = require('http')

const server = http.createServer()

server.listen(8080, () => {
    console.log(`Socket App is running in port 8080`)
})
// content of index.js
const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('<html><head></head><body><h1>Hello Node.js Server! BlokPayments - Coming Soon!</h1><h2>test</h2></body></html>')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
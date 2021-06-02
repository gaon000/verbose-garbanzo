const fs = require('fs')
const http = require('http')
const server = http.createServer()

// just plain txt file
server.on("request", (req, res) => {
  // res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Content-disposition', 'attachment; filename=hello.txt')
  const src = fs.createReadStream("./hello.txt")
  src.pipe(res)
})

server.listen(8000)

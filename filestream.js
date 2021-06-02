const fs = require('fs')
const http = require('http')
const server = http.createServer()
const url = require('url')
const getDownloadFilename = require('./filenameConverter').getDownloadFilename

// just plain txt file
server.on("request", (req, res) => {
  const parsed_url = url.parse(req.url)
  if (req.url == '/hello') { 
    res.setHeader('Content-disposition', 'attachment; filename=' + getDownloadFilename(req, '안녕.txt'))
    const src = fs.createReadStream("./hello.txt")
    src.pipe(res)
  }
  else {
    res.statusCode = 404
    res.end('bye')
  }
})

server.listen(8000)

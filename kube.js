#!/usr/bin/env node

      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(`<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>This is a Hello! from the Hello Kube Server.</p>
  </body>
</html>`)
})

server.listen(4242)

process.on('SIGINT', () => {
  process.exit(0)
})

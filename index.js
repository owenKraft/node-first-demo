const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer(function (req, res) {
    const q = url.parse(req.url, true)
    const filename = "." + q.pathname
    if(filename === './'){
        fs.readFile('./index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        fs.readFile(filename, function(err,data){
            if(err){
                fs.readFile('./404.html',function(err,data){
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.write(data)
                    return res.end()
                })
            } else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            }
        })
    }
}).listen(8080)
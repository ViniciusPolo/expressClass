
const http = require('http')

//fs = file system module! fs is build into Node. see above
// fs fs gives node aacess to THIS computers file system 
const fs = require('fs')

const server = http.createServer((req, res)=> {
    console.log(req.url)
    if (req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>This is the home page</h1>')
        res.end();
    } else if (req.url === "/name") {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>My name is Vinicius Polo</h1>')
        res.end();
    } else if (req.url === "/fs") {
        res.writeHead(200, {'content-type': 'text/html'})
        //res.write('<h1>My name is Vinicius Polo</h1>')
        const pageHTML = fs.readFileSync('index.html')
        res.write(pageHTML)
        res.end();
    } else if (req.url === "/me.jpg") {
        res.writeHead(200, {'content-type': 'image/jpg'})
        //res.write('<h1>My name is Vinicius Polo</h1>')
        const image = fs.readFileSync('me.jpg')
        res.write(image)
        res.end();
    }else if (req.url === "/styles.css") {
        res.writeHead(200, {'content-type': 'text/css'})
        //res.write('<h1>My name is Vinicius Polo</h1>')
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Not Found</h1>')
        res.end();
    }
})

server.listen(3000)

// first class - 8
//setInterval((() => {console.log("2.5 second")}),2500)

// second class - 9
//HTTP IS NATIVE to node js
const http = require('http')

//the hhtp module has a createServer method
// takes 1 arg:
// 1. callback, callback, has 2 args req, res
const server = http.createServer((req, res)=> {
    console.log(req)
    //  http message
    // 1. start line
    // 2. header
    // 3. body
    // writeread takes2 arg:
    // 1. status code
    // 2. object for a mime-type
    res.writeHead(200, {'content-type': 'text/html'}) //important html or json for instance
    res.write('<h1>Hello World</h1>')
    res.end();
})

//createServer returns and object with a listen method
// listen takens 1 arg:
// 1 . port list for a traffic on
server.listen(3000)

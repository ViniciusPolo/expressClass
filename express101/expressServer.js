//const http = require('http')
const express = require('express');
// it's the same that I use the function createApllication into nodemodules/express/lib/express
//  An App is express function 
const app = express();

// all is a method with to arg.
// 1 . route
// 2 . callback to run
app.all('/', (req, res) => {
    // Express handles the basic headers (status code, mime-type)! Awesome
    res.send('<h1>This is the home page</h1>')
    // Express handles the end! Wow
})

app.listen(3000)
console.log("server running")

const express = require('express');
const app = express();

const path = require('path')

//Awesome!! compare to show images in beforeExpress
// use like route the path into public
app.use(express.static('public'))

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'))
})

const port = 3000
app.listen(port)
console.log("server running on port: ", port)

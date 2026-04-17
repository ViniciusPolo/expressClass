const express = require('express');
const app = express();

// all is a method with to arg, or can use the CRUD.
// 1 . route
// 2 . callback to run
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my page with express</h1>')
})
app.post('/', (req, res) => {
        res.send('<h1>Welcome to my post example</h1>')

})
app.put('/', (req, res) => {})
app.delete('/', (req, res) => {})

const port = 3000
app.listen(port)
console.log("server running on port: ", port)

const express = require('express')
const app = express()

// Express = 2 things
// 1 Router
// 2 Middleware that comprises a webframework

// Req -- Middleware ---> Res
// 1 Req comes 1in.
// 2 We need to validade the user, sometimes
// 3 We need to store somethings in the DB
// 4 If there is data from the user we need to parse and store it

function validateUser(req, res, next) {
    //get info out of req object
    //do some stuff with DB

    res.locals.validate = true
    console.log("validate ran")
    next()
}

function tralala(req, res, next) {
    console.log("print tralala")
    next()
}

// \this will run in ALL paths
app.use(validateUser)

// this will run on declared path on first path
app.use('/admin', tralala)

app.get('/', (req, res, next) => {
    res.send('<h1>Main page</h1>')
})

app.get('/admin', (req, res, next) => {
    res.send('<h1>Admin page</h1>')
})
app.listen(3000)
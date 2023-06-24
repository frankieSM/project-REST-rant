
require('dotenv').config()


const express = require('express');
const app = express()

//IMPORT PLACES.JS (The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.)
app.use('/places', require('./controllers.places'))

//HOME ROUTE
app.get('/', (req, res)=>{
    res.send('hello world')
})

//404 ROUTE
app.get('*',(req, res)=> {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
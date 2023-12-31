
require('dotenv').config()


const express = require('express');
const app = express()
const methodOverride = require('method-override')



//DEFINES THE VIEW ENGINE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//LET EXPRESS KNOW WHAT STATIC FOLDER IS CALLED
app.use(express.static('public'));

//BODY PARSER
app.use(express.urlencoded({ extended: true }))

//IMPORT PLACES.JS (The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.)
app.use('/places', require('./controllers/places'))

//METHOD OVERRIDE
app.use(methodOverride('_method'))


//HOME ROUTE
app.get('/', (req, res)=>{
    res.render('home')
})

//404 ROUTE
app.get('*',(req, res)=> {
    res.render('error404') //changed from res.status(404).send('<h1>404 Page</h1>') to use the new render view
})

app.listen(process.env.PORT, function () {
    console.log('Server is running!')
  })
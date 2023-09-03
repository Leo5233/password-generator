const express = require('express')
const port = 3000
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const getPassword = require('./public/javascripts/main.js')

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(bodyParser.urlencoded({extended: true})) //要有這句才讀得到post資料
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const data = req.body
  const len = Number(data.length)
  const password = getPassword(len, data.lowercase, data.uppercase, data.number, data.symbol, data.exclude)
  console.log(data)
  res.render('index', {password, data})
  
})


app.listen(port, () => {
  console.log(`express server is ruining on https:localhost:${port}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const dbConnect = require('knex')(configuration)
const pythonShell = require('python-shell')
const User = require('./models/user')

require('dotenv').config()
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)

app.locals.title = 'TTP Back End Server'

// GETS

app.get('/', (req, res) => {
  const { title } = app.locals
  res.status(200).send(`${title} is running on port ${app.get('port')}`)
})

// POSTS

app.post('/users/signup', User.signup)
app.post('/users/signin', User.signin)

// PUTS


// PATCHES


// DELETES


module.exports = app;
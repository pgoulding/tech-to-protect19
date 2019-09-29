const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment]; 
const database = require('knex')(configuration);
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const signup = (req, res) => {
  // get user from request body
  const user = req.body
  // encrypt plain text password with bcrypt
  hashPassword(user.password)
  // set user's password_digest to encrypted pw
    .then((hashedPassword) => {
      delete user.password
      user.password_digest = hashedPassword
    })
    // create token to be sent back to client to create "session"
    .then(() => createToken())
    // set user's token to created token
    .then(token => user.token = token)
    // save user with password_digest and session token to database
    .then(createUser(user))
    .then(user => {
      delete user.password_digest
      // respond with 201 and json of created user info
      res.status(201).json({ user })
    })
    // if not respond with 400 status and error
    .catch(error => console.log(error))
    // .catch((error) => res.status(400).json({ error }))
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash)
    })
  })
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

const createUser = (user) => {
  return database('users')
    .insert(user)
    .then((data) => data.rows[0])
    .catch(error => console.log(error))
}

const signin = (req, res) => {
  // get user creds from request body
  // find user based on username in request
  // check user's password_digest against pw from request
  // if match, create and save a new token for user
  // send back json to client with token and user info
}

const findUser = (userReq) => {

}

const checkPassword = (reqPassword, foundUser) => {

}

const updateUserToken = (token, user) => {

}

const authenticate = (userReq) => {

}

const findByToken = (token) => {

}



module.exports = {signup, signin};
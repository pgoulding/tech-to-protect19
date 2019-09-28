const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment]; 
const database = require('knex')(configuration);
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const signup = (req, res) => {
  // get user from request body
  // encrypt plain text password with bcrypt
  // set user's password_digest to encrypted pw
  // create token to be sent back to client to create "session"
  // set user's token to created token
  // save user with password_digest and session token to database
  // respond with 201 and json of created user info
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

const hashPassword = (password) => {

}

const createToken = () => {

}

const createUser = (user) => {

}



module.exports = {signup, signin};
var express = require('express')
var router = express.Router()
const User = require('../models/user')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// Get spesific user
router.get('/:userEmail', function (req, res, next) {
  const userEmail = req.params.userEmail
  const user = User.findUserByEmail(userEmail)
  res.status(200).send(user)
})
// Create a new user
router.post('/', async function (req, res, next) {
  const user = await User.create({ name: req.body.name, childAge: req.body.childAge, email: req.body.email })
  res.send(user)
})

//Delete a user
router.delete('/', function (req, res, next) {
  const userEmail = req.body.userEmail

  const deletedUser = User.deleteUserByEmail(userEmail)

  res.status(200).send(deletedUser)
})
module.exports = router

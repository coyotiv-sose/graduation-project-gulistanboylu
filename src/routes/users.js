var express = require('express')
var router = express.Router()
const User = require('../user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).send(User.list)
})

// Create a new user
router.post('/', function (req, res, next) {
  const user = User.create({ name: req.body.name, childAge: req.body.childAge, email: req.body.email })
  res.send(user)
})

//create story for a user
module.exports = router

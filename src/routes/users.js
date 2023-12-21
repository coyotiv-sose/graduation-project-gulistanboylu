var express = require('express')
var router = express.Router()
const User = require('../user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.query.view === 'json') {
    res.status(200).send(User.list)
  }

  res.render('users', { users: User.list })
})

// Get spesific user
router.get('/:userEmail', function (req, res, next) {
  const userEmail = req.params.userEmail
  const user = User.findUserByEmail(userEmail)
  res.status(200).send(user)
})
// Create a new user
router.post('/', function (req, res, next) {
  const user = User.create({ name: req.body.name, childAge: req.body.childAge, email: req.body.email })
  res.send(user)
})

//Delete a user
router.delete('/', function (req, res, next) {
  const userEmail = req.body.userEmail

  const deletedUser = User.deleteUserByEmail(userEmail)

  res.status(200).send(deletedUser)
})
module.exports = router

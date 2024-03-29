var express = require('express')
var router = express.Router()
const User = require('../models/user')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// Get spesific user
router.get('/:_id', async function (req, res, next) {
  const user = await User.findById(req.params._id)
  res.status(200).send(user)
})
// Create a new user
router.post('/', async function (req, res, next) {
  const user = await User.create({ name: req.body.name, childAge: req.body.childAge, email: req.body.email })
  res.send(user)
})

//Delete a user
router.delete('/:_id', async function (req, res, next) {
  await User.findByIdAndDelete(req.params._id)

  res.status(200).send({ message: 'User deleted' })
})
module.exports = router

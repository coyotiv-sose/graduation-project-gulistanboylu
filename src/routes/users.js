var express = require('express')
var router = express.Router()
const User = require('../user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).send([{ name: 'Defne' }, { name: 'Mama' }, { name: 'Baba' }])
})

// Create a new user
router.post('/', function (req, res, next) {
  const user = new User(req.body.name)
  res.send(user)
})

module.exports = router

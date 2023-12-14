var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).send({
    user: { name: 'Defne' },
    users: [
      {
        name: 'Defne',
      },
      {
        name: 'Gulistan',
      },
      {
        name: 'Muharrem',
      },
    ],
  })
})

module.exports = router

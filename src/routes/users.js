var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.render('users', {
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

var express = require('express')
var router = express.Router()
const User = require('../user')

/* GET home page. */
router.get('/', function (req, res, next) {
  const email = req.query.email
  const userIndex = User.list.findIndex(user => user.email === email)
  if (userIndex === -1) {
    return res.status(404).send('Please provide an email for story list in the query')
  }
  const storiesForUser = User.list[userIndex].stories
  res.status(200).send(storiesForUser)
})

router.post('/', function (req, res, next) {
  const user = User.list.find(user => user.email === req.body.user.email)
  const story = user.storyCreate({
    hero: req.body.hero,
    title: req.body.title,
    topic: req.body.topic,
    favoruitePeople: req.body.favoruitePeople,
    heroDescription: req.body.heroDescription,
  })

  res.send(story)
})

module.exports = router

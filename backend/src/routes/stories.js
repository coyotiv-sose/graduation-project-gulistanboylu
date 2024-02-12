var express = require('express')
var router = express.Router()
const User = require('../models/user')
const Story = require('../models/story')

/* GET spesific story by id. */
router.get('/:id', async function (req, res, next) {
  const story = await Story.findById(req.params.id)
  res.status(200).send(story)
})

/* GET all stories for the user. */
router.get('/', async function (req, res, next) {
  //todo: get user id from the session on the future.
  const user = await User.findById(req.query.id)

  res.status(200).send(user.stories)
})

router.post('/', async function (req, res, next) {
  const user = await User.findOne({ _id: req.body.user })
  const story = await user.storyCreate({
    hero: req.body.hero,
    title: req.body.title,
    topic: req.body.topic,
    favoruitePeople: req.body.favoruitePeople,
    heroDescription: req.body.heroDescription,
  })

  res.send(story)
})

// stories/:storyTitle
router.delete('/:id', async function (req, res, next) {
  const story = await Story.findById(req.params.id)
  if (!story) {
    return res.status(404).send('Story not found')
  }
  await Story.findByIdAndDelete(req.params.id)
  res.status(200).send({ message: 'Story deleted' })
})

router.put('/:id', async function (req, res, next) {
  //todo: get user id from the session on the future if its needed.
  const updatedStory = await Story.findOneAndUpdate({ _id: req.params.id }, req.body.newStoryData, { new: true })
  res.status(200).send(updatedStory)
})
module.exports = router

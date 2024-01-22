const { default: mongoose } = require('mongoose')

class Story {}

const storySchema = new mongoose.Schema({
  hero: String,
  title: String,
  topic: String,
  favoruitePeople: String,
  heroDescription: String,
})

storySchema.loadClass(Story)
module.exports = mongoose.model('Story', storySchema)

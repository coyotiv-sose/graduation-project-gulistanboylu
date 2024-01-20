const { default: mongoose } = require('mongoose')

class Story {
  // constructor(hero, title, topic, favoruitePeople, heroDescription) {
  //   this.hero = hero
  //   this.title = title
  //   this.topic = topic
  //   this.favoruitePeople = favoruitePeople
  //   this.heroDescription = heroDescription
  // }
}

const storySchema = new mongoose.Schema({
  hero: String,
  title: String,
  topic: String,
  favoruitePeople: String,
  heroDescription: String,
})

storySchema.loadClass(Story)
module.exports = mongoose.model('Story', storySchema)

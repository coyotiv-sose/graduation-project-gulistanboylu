const Story = require('./story')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  childAge: Number,
  email: String,
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }],
})

module.exports = mongoose.model('User', userSchema)
class User {
  stories = []
  constructor(name, childAge, email) {
    this.name = name
    this.childAge = childAge
    this.email = email
  }

  storyCreate({ hero, title, topic, favoruitePeople, heroDescription }) {
    const newStory = new Story(hero, title, topic, favoruitePeople, heroDescription)

    this.stories.push(newStory)

    return newStory
  }

  deleteStoryByTitle(storyTitle) {
    const index = this.stories.findIndex(story => story.title === storyTitle)

    if (index === -1) {
      return null // Story not found
    }

    const deletedStory = this.stories.splice(index, 1)[0]
    return deletedStory
  }

  updateStoryByTitle(storyTitle, newData) {
    //finds the story from the title
    const story = this.stories.find(s => s.title === storyTitle)
    //update the story with newdata
    Object.assign(story, newData)
    return story
  }

  static findUserByEmail(email) {
    const user = User.list.find(user => user.email === email)
    return user
  }

  static deleteUserByEmail(email) {
    const index = User.list.findIndex(user => user.email === email)

    if (index === -1) {
      return null // User not found
    }

    const deletedUser = User.list.splice(index, 1)[0]
    return deletedUser
  }

  static list = []
  static create({ name, childAge, email }) {
    const newUser = new User(name, childAge, email)

    User.list.push(newUser)
    return newUser
  }
}

// module.exports = User

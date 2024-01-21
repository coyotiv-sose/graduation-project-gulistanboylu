const Story = require('./story')
const mongoose = require('mongoose')
const autoPopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: String,
  childAge: Number,
  email: String,
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story', autopopulate: true }],
})

userSchema.plugin(autoPopulate)
class User {
  async storyCreate({ hero, title, topic, favoruitePeople, heroDescription }) {
    const newStory = await Story.create({ hero, title, topic, favoruitePeople, heroDescription })
    this.stories.push(newStory)
    await this.save()
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

  static deleteUserByEmail(email) {
    const index = User.list.findIndex(user => user.email === email)

    if (index === -1) {
      return null // User not found
    }

    const deletedUser = User.list.splice(index, 1)[0]
    return deletedUser
  }
}

userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)

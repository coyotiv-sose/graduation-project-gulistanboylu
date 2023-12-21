const Story = require('./story')

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

module.exports = User

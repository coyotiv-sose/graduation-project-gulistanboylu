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

  static list = []
  static create({ name, childAge, email }) {
    const newUser = new User(name, childAge, email)

    User.list.push(newUser)
    return newUser
  }
}

module.exports = User

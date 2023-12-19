const Story = require('./story')

class User {
  constructor(name, childAge, email) {
    this.name = name
    this.childAge = childAge
    this.email = email
  }

  static list = []
  static create({ name, childAge, email }) {
    const newUser = new User(name, childAge, email)

    User.list.push(newUser)
    return newUser
  }

  static storyList = []
  static storyCreate({ email, hero, title, topic, favoruitePeople, heroDescription }) {
    const newStory = new Story(hero, title, topic, favoruitePeople, heroDescription)

    User.storyList[email].push(newStory)
    return newStory
  }
}

module.exports = User

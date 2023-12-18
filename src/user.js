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
  static storyCreate(hero, title, topic, favoruitePeople, heroDescription) {
    const story = new Story(title, topic, favoruitePeople, heroDescription)

    Story.storyList.push(story)
    return story
  }
}

module.exports = User

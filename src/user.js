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

  static userStories = {}
  static storyCreate({ email, hero, title, topic, favoruitePeople, heroDescription }) {
    let storyList = []
    const newStory = new Story(hero, title, topic, favoruitePeople, heroDescription)

    storyList.push(newStory)
    User.userStories[email] = storyList

    console.log('story list', User.userStories)
    return newStory
  }
}

module.exports = User

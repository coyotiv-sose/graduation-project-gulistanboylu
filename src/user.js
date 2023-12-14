class User {
  constructor(name) {
    this.name = name
  }

  static create({ name }) {
    const newUser = new User(name)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

module.exports = User

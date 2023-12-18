class User {
  constructor(name, childAge, email) {
    this.name = name
    this.childAge = childAge
    this.email = email
  }

  static create({ name, childAge, email }) {
    const newUser = new User(name, childAge, email)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

module.exports = User

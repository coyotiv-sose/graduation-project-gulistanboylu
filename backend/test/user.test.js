const User = require('../src/models/user')
require('dotenv').config()
require('../src/database-connection')

test('Create a user is successful', async () => {
  const user = await User.create({ name: 'Gulistan', childAge: 2, email: 'gulistan.boylu@gmail.com' })
  expect(user.name).toBe('Gulistan')
  expect(user.childAge).toBe(2)
  expect(user.email).toBe('gulistan.boylu@gmail.com')
})

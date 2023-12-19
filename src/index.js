const axios = require('axios')
const User = require('./user')
console.log("Hi coyote, let's have some JavaScript fun! Yey!")

//fetch the users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

//create user function
const userEndPoint = 'http://localhost:3000/users'
async function createUser(name, childAge, email) {
  const user = await axios.post(userEndPoint, {
    name,
    childAge,
    email,
  })
}

async function createStory(email, hero, title, topic, favoruitePeople, heroDescription) {
  const story = await axios
    .post(`${userEndPoint}/1`, {
      email,
      hero,
      title,
      topic,
      favoruitePeople,
      heroDescription,
    })
    .then(res => {
      console.log('response data ', res.data)
    })
}

//create a user
async function main() {
  createUser('Rose', 2, 'asd@gmail.com')
  createUser('Buket', 1, 'hdede@gmail.com')

  const allUsers = await axios.get(userEndPoint)
  console.log(allUsers.data)

  createStory(
    'asd@gmail.com',
    'Zoe',
    'Bed Time for Zeo',
    'Bed routine for 2 years old girl, she is trying to adapt with her bedtime routine',
    'Mum',
    '2 years old girl with currly brown hair, lovely simile'
  )

  createStory(
    'hdede@gmail.com',
    'Bea',
    'Bea gets a checkup',
    'Doctor checkoup for 2 year old and she will have her vaccination',
    'Mum, Dad',
    '2 years old girl with strait blonde hair, lovely simile with a blue eyes'
  )
}

main()

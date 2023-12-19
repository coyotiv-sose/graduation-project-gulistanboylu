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
  return user.data
}

async function createStory(hero, title, topic, favoruitePeople, heroDescription, user) {
  const story = await axios
    .post(`${userEndPoint}/1/stories`, {
      hero,
      title,
      topic,
      favoruitePeople,
      heroDescription,
      user,
    })
    .then(res => {
      console.log('response data ', res.data)
    })
}

//create a user
async function main() {
  const rose = await createUser('Rose', 2, 'asd@gmail.com')
  const buket = await createUser('Buket', 1, 'hdede@gmail.com')
  console.log('rose u logluyoruz', rose)

  await createStory(
    'Zoe',
    'Bed Time for Zeo',
    'Bed routine for 2 years old girl, she is trying to adapt with her bedtime routine',
    'Mum',
    '2 years old girl with currly brown hair, lovely simile',
    rose
  )

  await createStory(
    'Bea',
    'Bea gets a checkup',
    'Doctor checkoup for 2 year old and she will have her vaccination',
    'Mum, Dad',
    '2 years old girl with strait blonde hair, lovely simile with a blue eyes',
    buket
  )

  const allUsers = await axios.get(userEndPoint)
  console.log(allUsers.data[0].stories)
}

main()

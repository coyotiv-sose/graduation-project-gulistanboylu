const axios = require('axios')
const User = require('./user')
const { response } = require('./app')
console.log("Hi coyote, let's have some JavaScript fun! Yey!")

// fetch the users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

//create user function
const userEndPoint = 'http://localhost:3000/users'
const storiesEndPoint = 'http://localhost:3000/stories'
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
    .post(storiesEndPoint, {
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
    'JJ',
    'Time to go: Pee',
    'Potty traning  for 2 years old boy, she is trying to adapt with her potty routine',
    'Dad',
    '3 years old boy with currly brown hair',
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

  const userStoryList = await axios.get(`http://localhost:3000/stories?email=asd@gmail.com`).then(response => {
    return response.data
  })

  const deleteStory = await axios
    .delete(`http://localhost:3000/stories`, {
      data: {
        userEmail: 'asd@gmail.com',
        storyTitle: 'Bed Time for Zeo', // or you can use story title: storyToDelete.title if you want to delete by title
      },
    })
    .then(response => {
      console.log('Deleted story: ', response.data)
    })

  const allUsers = await axios.get(userEndPoint)
  // console.log(allUsers.data[0].stories)
  // console.log('storylist', userStoryList)
}

main()

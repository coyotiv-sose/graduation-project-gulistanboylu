const axios = require('axios')

console.log("Hi coyote, let's have some JavaScript fun! Yey!")

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
  console.log('burda', storiesEndPoint, hero, title, topic, favoruitePeople, heroDescription, user)
  await axios
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

async function deleteUser(id) {
  const response = await axios.delete(`http://localhost:3000/users/${id}`)
  console.log(response.data)
}

//create a user
async function main() {
  const rose = await createUser('Rose', 2, 'asd@gmail.com')
  const buket = await createUser('Buket', 1, 'hdede@gmail.com')

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

  const getRose = await axios.get(`${userEndPoint}/65ad40c81dd49bdee858155c`).then(response => {
    return response.data
  })

  const allUsers = await axios.get(userEndPoint).then(response => {
    console.log('all users', response.data)
    return response.data
  })
}

async function testUSerDelete() {
  const defne = await createUser('DEfne', 2, 'dfne@gmail.com')
  await deleteUser(defne._id)
}

async function testStoryDelete() {
  const deleteStory = await axios
    .delete(`${storiesEndPoint}/65ad808b90939fcd3f26ee17`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
}

async function testStoryUpdate() {
  const updateStory = await axios
    .put(`${storiesEndPoint}/65ad808b90939fcd3f26ee1e`, {
      newStoryData: {
        hero: 'Updated Hero with Numan',
      },
    })
    .then(response => {
      console.log('story updated')
      return response.data
    })
}
main()
// testStoryDelete()
// testUSerDelete()
// testStoryUpdate()

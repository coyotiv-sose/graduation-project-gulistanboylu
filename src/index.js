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

//create a user
async function main() {
  createUser('Rose', 2, 'asd@gmail.com')
  createUser('Buket', 1, 'hdede@gmail.com')

  const allUsers = await axios.get(userEndPoint)
  console.log(allUsers.data)

  const roseFirstStory = await axios
    .post(`${userEndPoint}/1`, {
      hero: 'Zoe',
      title: 'Bed Time for Zeo',
      topic: 'Bed routine for 2 years old girl, she is trying to adapt with her bedtime routine',
      favoruitePeople: 'Mum, Dad',
      heroDescription: '2 years old girl with currly brown hair, lovely simile',
    })
    .then(res => {
      console.log('response data ', res.data)
    })
}

main()

const axios = require('axios')
const User = require('./user')
console.log("Hi coyote, let's have some JavaScript fun! Yey!")

//fetch the users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

//create a user
async function main() {
  const rose = await axios.post('http://localhost:3000/users', {
    name: 'Rose',
    childAge: 2,
    email: 'asd@gmail.com',
  })

  const buket = await axios.post('http://localhost:3000/users', {
    name: 'Buket',
    childAge: 1,
    email: 'hdede@gmail.com',
  })

  const allUsers = await axios.get('http://localhost:3000/users')
  console.log(allUsers.data)

  const roseFirstStory = await axios
    .post('http://localhost:3000/users/1', {
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

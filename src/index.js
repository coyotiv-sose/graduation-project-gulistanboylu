const axios = require('axios')
const User = require('./user')
console.log("Hi coyote, let's have some JavaScript fun! Yey!")

//fetch the users with axios
axios.get('http://localhost:3000/users').then(response => {
  console.log(response.data)
})

// create a user
async function main() {
  const rose = await axios.post('http://localhost:3000/users', {
    name: 'Rose',
  })

  const buket = await axios.post('http://localhost:3000/users', {
    name: 'Buket',
  })

  const allUsers = await axios.get('http://localhost:3000/users')
  console.log(allUsers.data)
}

main()

const axios = require('axios')

console.log("Hi coyote, let's have some JavaScript fun! Yey!")

//fetch the users with axios
axios.get('http://localhost:3000/users').then(response => {
  console.log(response.data)
})

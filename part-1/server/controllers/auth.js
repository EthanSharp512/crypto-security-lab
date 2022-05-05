const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].pinHash)
        if (users[i].username === username && existing) {
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        const { username, email, firstName, lastName, password} = req.body

        const pinHash = bcrypt.hashSync(password, bcrypt.genSaltSync(5))
      
      let passObj = {
        username, 
        email, 
        firstName,
        lastName,
        pinHash,
      }

      users.push(passObj)
      let passwordToReturn = {...passObj}
      delete passwordToReturn.pinHash
      res.status(200).send(passwordToReturn)
    }
}
const sequelize = require('./config')
const User = require('./model/User')

sequelize.sync()
    .then(() => {
        console.log('Database and tables created / resynced')
    })
    .catch((err) => {
        console.error('Error syncing the databse:', err.message)
    })

// Create a new user
User.create({
    name: 'Joko Tingkir',
    email: 'joko@tingkir.com'
})
    .then((user) => {
        console.log('User created:', user.toJSON())
    })
    .catch((err) => {
        console.error('Error creating user:', err.message)
    })

// retrieve user data list
User.findAll({
    raw: true
})
    .then((users) => {
        console.log('User list:', users)
    })
    .catch((err) => {
        console.error('Error retrieving user', err.message)
    })
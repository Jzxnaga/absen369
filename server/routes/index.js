const routes = require('express').Router()
const masterstaff = require('./masterstaff.js')



routes.get('/',(req,res)=>{
    res.send('homepage')
})

routes.use('/user',masterstaff)
















module.exports = routes
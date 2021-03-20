const routes = require('express').Router()
const masterstaff = require('./masterstaff.js')



routes.get('/',(req,res)=>{
    res.send('homepage absen')
})

routes.use('/user',masterstaff)
















module.exports = routes
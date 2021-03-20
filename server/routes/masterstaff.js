const route = require('express').Router()
const masterstaff = require('../controllers/masterstaff.js')
//const {authentication,authorization} = require('../middlewares/auth.js')


route.get('/all' ,masterstaff.findAll)
route.post('/reg' ,masterstaff.register)
route.post('/login',masterstaff.login)
route.post('/absen',masterstaff.absen)
// route.post('/' ,user.login)

// route.get('/mycart',authentication,user.myCart)
// route.post('/mycart/checkout',authentication,user.checkout)

module.exports=route
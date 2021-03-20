const {Masterstaff,Masterabsen} = require('../models/index')
const sequelizes = require('../models/index').sequelize
const sequelize = require('sequelize')
const Op = sequelize.Op
// const { checkPassword } = require('../helpers/bcrypt')
// const { generateTokenUser } = require('../helpers/jwt')
// const { verifyToken } = require('../helpers/jwt')

class Controller{
     static findAll(req,res,next){
        Masterstaff.findAll({})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static register(req,res,next){
        const {name,username,password} = req.body
            
        let status = true
        
        Masterstaff.findOne({where:{username}})
        .then(data=>{
            if(!data){
                status = true
            }else{
                status = false
            }
            if (status == false){
                throw ({message:'REGISTERED_USERNAME'})
            }else{
                return Masterstaff.create(req.body)
            }
        })
        .then(data=>{
            res.status(201).json({data})
        })
        .catch(err=>{
            next(err)
        })
    }
    
    // static myCart(req,res,next){
    //     console.log('masuk sini')
    //     console.log(req.headers.id)
    //     User.findOne({
    //         where : {id:Number(req.headers.id)},
    //         include: [{ model: Product }]
    //     })
    //     .then(data=>{
    //         res.status(200).json(data)
    //     })
    //     .catch(err=>{
    //         next(err)
    //     })
    // }

    // static register(req,res,next){
    //     const {name,email,username, password} = req.body
            
    //     let status = true
        
    //     User.findOne({where:{username}})
    //     .then(data=>{
    //         if(!data){
    //             status = true
    //         }else{
    //             status = false
    //         }
    //         if (status == false){
    //             throw ({message:'REGISTERED_USERNAME'})
    //         }else{
    //             return User.create(req.body)
    //         }
    //     })
    //     .then(data=>{
    //         res.status(201).json({data})
    //     })
    //     .catch(err=>{
    //         next(err)
    //     })
    // }
    
    static login(req,res,next){
        const {username, password} = req.body

        Masterstaff.findOne({where: { username }})
        .then(data=>{
            if(data){
                if(password==data.password){
                    res.status(200).json('1')
                } else {
                    console.log('salahpasss')
                    res.status(200).json('2')
                }
            } else {
                console.log('gaketemuuser')
                res.status(200).json('2')
            }
            })
            .catch(err=>{
                console.log('errorgajelas')
                next(err)
            })
        }

    static absen(req,res,next){
        const {location,image,username,absenDay}=req.body
        //console.log(req.body.location.slice(0,15),'timeinabsen')
        let body = {
            username:username,
            image:image,
            location:location,
            absenDay:absenDay
        }
        let arrSlice = location
        Masterabsen.findOne({
            where: {
            [Op.and]:[{
                username: {
                    [Op.like]: `%${username}%`
                    }
                },
                {
                absenDay: {
                    [Op.like]: `%${absenDay}%`
                    }
                }
            ]}
        })
        .then(data=>{
            if(!data){
                Masterabsen.create(body)
            }else{
                res.status(200).json(2)
            }
        })
        .then(data=>{
            res.status(200).json(1)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    // static checkout(req,res,next){
    //     let array = []
    //     let targetedId ;
    //     let stock ;
    //     let quantity ;
    //     User.findOne({
    //         where : {id:Number(req.headers.id)},
    //         include: [{ model: Product }]
    //     })
    //     .then(data=>{
    //         for(var i = 0 ; i < data.Products.length ; i++){
    //             stock = data.Products[i].stock
    //             quantity = data.Products[i].Cart.quantity
    //             let statusbaru = true
    //             if(stock - quantity == 0){
    //                 statusbaru = false
    //             }

    //             let body = {
    //                 stock: stock-quantity,
    //                 status: statusbaru,
    //             }
    //             targetedId = data.Products[i].id
    //             array.push(Product.update(body, {where : {id : targetedId}}))
    //             array.push(Cart.destroy({where:{UserId:data.id,ProductId:targetedId}}))
    //         }
    //         return Promise.all(array)
    //     })
    //     .then(data=>{
    //         res.status(200).json(data)
    //     })
    //     .catch(err=>{
    //         next(err)
    //     })
    // }



}

module.exports=Controller
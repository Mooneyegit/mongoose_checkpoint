const model = require('../model/user')
const mongoose = require('mongoose')


// find user
app.get('/user', async (req, res, ) => {
    const user = await model.find() 
    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
})
// find find by id
app.get('/user', async (req, res, ) => {
    const user = await model.findById() 
    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
})
//fine one
app.get('/user', async (req, res, ) => {
    const user = await model.findOne() 
    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
})



//create user
app.post('/newUser', async (req, res,)=>{

    const user = new userModel(req.body)
    try {
        await user.save
    } catch (error) {
        res.status(500).send(error);
    }
})
// update user
app.put('/user:id', async (req,res)=>{
    const user = await model.findOneAndUpdate()
    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
}) 
// detele user
app.delete('/user', async (req,res)=>{
    const user = await model.remove()
    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
}) 
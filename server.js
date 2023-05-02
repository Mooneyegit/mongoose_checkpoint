const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4040
const user = require('./model/user')



app.use(express.urlencoded({ extended: true }));
app.use(express.json())


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

    const user = req.body
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



app.listen(port, function(){
    console.log(`server listening on ${port}`)
})
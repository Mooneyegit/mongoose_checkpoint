const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true

    },
    age:{
        type:Number
    },
    favoriteFoods: [
        {
        type: String
        }]
})

module.export = mongoose.model('User', userSchema);
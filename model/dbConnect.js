const mongoose = require('mongoose')

try {
    mongoose.connect(db_connect)
} catch (error) {
     console.log('error')
}


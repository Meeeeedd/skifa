const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/skifa_db')
    // .then(() => console.log('DB connected'))
    // .catch(err => console.log(err))

mongoose.connection.on('connected',()=>{
    console.log('Db has connected succesfully')
})

mongoose.connection.on('reconnected',()=>{
    console.log('Db has reconnected')
})

mongoose.connection.on('error',()=>{
    console.log('Db connection has an error',error)
})

mongoose.connection.on('disconnected',()=>{
    console.log('Db is disconnected')
})
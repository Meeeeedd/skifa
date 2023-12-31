require('dotenv').config();
const http = require('http');
const app = require('./app');

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/skifa_db')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

const server = http.createServer(app);


const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'
server.listen(PORT, () => {
    console.log(`Server listening on ${HOST}:${PORT}`)
});
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routing = require('./routes/user')

const PORT = process.env.PORT || 8000

const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use('/uploads', express.static('uploads'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/users-crud');
        console.log(`Connected to MongoDB 👍`);
    } catch (err) {
        console.log('DB Connection Err');
    }
}

connect()
// db connecting
// require('./db')

app.use('/api', routing)


app.listen(PORT, () => {
    console.log(`APP STARTED PORT 🚀 : ${PORT}`)
})

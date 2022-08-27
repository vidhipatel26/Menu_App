const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://vidhip:Karvi07@cluster0.pkhhiik.mongodb.net/test'

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
const menuRouter = require('./routes/menuRouter')
app.use('/menuModal', menuRouter)


app.listen(9000, () => {
    console.log('server started')
})
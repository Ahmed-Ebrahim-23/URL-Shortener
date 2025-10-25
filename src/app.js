require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const UrlRouter = require('./routers/urls.router')
const connectDB = require('./config/dbConnection')

connectDB();

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());

app.use('/urls', UrlRouter);

mongoose.connection.once('open', () => {
  console.log("connected to MongoDB");
  
  app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
})

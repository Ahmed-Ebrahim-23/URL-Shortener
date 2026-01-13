require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const connectDB = require('./config/dbConnection')
require('./config/redisConnection');
const UrlRouter = require('./routers/urls.router')
const RedirectRouter = require("./routers/redirect.router")

connectDB();

const app = express()
const port = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/urls', UrlRouter);
app.use('', RedirectRouter)

mongoose.connection.once('open', () => {
  console.log("connected to MongoDB");
  
  app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
})

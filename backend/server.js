//server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Db/index.js'
import auth from './routes/auth.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connectDB()
app.use('/auth', auth)

app.get('/', (req, res) => {
  res.send("Server is running...");
})
const Port = process.env.PORT
app.listen(Port || 3000, () => {
  console.log(`server is running on Port ${Port}`);

})
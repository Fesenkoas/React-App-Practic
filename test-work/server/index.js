import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import itemRoute from './routes/item.js'

const app = express();
dotenv.config()

//Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


//MiddleWare
app.use(cors())
app.use(express.json())

//Routes
//http://localhost:3002
app.use('/api/item',itemRoute )


async function start() {
    try {
      await mongoose.connect(`mongodb+srv://${DB_USER}:${ DB_PASSWORD}@cluster0.q408pmi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
          app.listen(PORT,()=> console.log(`server start:${PORT}`))
    } catch (e) {
      console.log(e);
    }
  }

start();
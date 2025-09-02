import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js';

const app=express();

// config dotenv file
dotenv.config()

// database call
connectDb()

// middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("Hello from Faraj")
})

const PORT=process.env.PORT || 3001

//listen 
app.listen(PORT,()=>{
   console.log(`Server running on port number ${PORT}`)
})
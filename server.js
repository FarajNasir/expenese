import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js';

const app=express();

// config dotenv file
dotenv.config();

// database call
connectDb();

// middlewares
app.use(cors());
app.use(express.json());

//routes
import userRoutes from './routes/userRoutes.js'
app.use('/api/v1/user',userRoutes);

const PORT=process.env.PORT || 3001

//listen 
app.listen(PORT,()=>{
   console.log(`Server running on port number ${PORT}`)
})
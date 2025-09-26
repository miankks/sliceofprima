import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { connectDB } from './config/db.js';
import foodRouter from './routes/food.route.js';
import userRouter from './routes/user.route.js';
import 'dotenv/config';

dotenv.config();

// app config
const app = express();
const port = 3000;

// middleware, when request comes from frontend that will parse through json
app.use(express.json());
// can get access to backend from any frontend to backend
app.use(cors());

// DB connect
connectDB();

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    
})


// retryWrites=true&w=majority&appName=Cluster0

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
    
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
    
})


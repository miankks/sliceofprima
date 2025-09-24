import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import listingRouter from './routes/listing.route.js'
import { connectDB } from './config/db.js';

dotenv.config();

// mongoose.connect(process.env.MONGO).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((err) => {
//     console.log(err, "there is an error connecting");
    
// })

// app config
const app = express();
const port = 3000;

// middleware, when request comes from frontend that will parse through json
app.use(express.json());
// can get access to backend from any frontend to backend
app.use(cors());

// DB connect
connectDB();
app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    
})

app.use('/api/listing', listingRouter)

// retryWrites=true&w=majority&appName=Cluster0

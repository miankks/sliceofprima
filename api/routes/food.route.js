import express from 'express'
import { addFood } from '../controllers/food.controller.js';
import multer from 'multer';

const foodRouter = express.Router();

foodRouter.post('/addfood', addFood);

export default foodRouter;
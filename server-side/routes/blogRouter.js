import express from 'express';
import { handleGetAllBlogs } from '../controllers/blogController.js';

export const  blogRouter = express.Router();


blogRouter.route('/').get(handleGetAllBlogs);
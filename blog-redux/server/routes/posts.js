import { Router } from "express";
import { checkAuth } from '../util/checkAuth.js';
import { createPost } from './../controllers/postsControl.js';

const router = new Router()

//Reister
//http://localhost:3002/api/auth/post
router.post('/',checkAuth, createPost)

export default router
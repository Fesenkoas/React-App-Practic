import { Router } from "express";
import { get, post } from "../controller/controlItem.js";

const router = new Router()

//Put data
//http://localhost:3002/api/item/post
router.post('/post',post)
//Get data
//http://localhost:3002/api/item/get
router.get('/get',get)


export default router
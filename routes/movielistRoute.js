import express from 'express';

import { movieLIST } from '../controllers/sazzad/movieList.js';



const router = express.Router();






router.get('/show', movieLIST.getAllMovie);


export default router;
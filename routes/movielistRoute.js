import express from 'express';

import { movieLIST } from '../controllers/sazzad/movieList';



const router = express.Router();






router.get('/show', movieLIST.getAllMovie);
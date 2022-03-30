import express from "express";

import { healthCheck, postTweet } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', healthCheck);

router.get('/api/analysis', postTweet);

export default router;
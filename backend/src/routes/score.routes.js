import { Router } from 'express';
import { submitScore } from '../controllers/scores.controller.js';

const router = Router();

router.post('/', submitScore);

export default router;

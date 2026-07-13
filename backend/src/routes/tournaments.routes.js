import { Router } from 'express';
import { getTournaments, createTournament } from '../controllers/tournaments.controller.js';

const router = Router();

router.get('/', getTournaments);
router.post('/', createTournament);

export default router;

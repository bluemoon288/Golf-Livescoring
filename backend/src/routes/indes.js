import { Router } from 'express';

import scoresRoutes from './scores.routes.js';
import tournamentsRoutes from './tournaments.routes.js';
import leaderboardRoutes from './leaderboard.routes.js';

const router = Router();

router.use('/scores', scoresRoutes);
router.use('/tournaments', tournamentsRoutes);
router.use('/leaderboard', leaderboardRoutes);

export default router;

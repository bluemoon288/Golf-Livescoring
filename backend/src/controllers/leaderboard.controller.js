import { buildLeaderboard } from '../services/leaderboard.service.js';

export const getLeaderboard = async (req, res) => {
  try {
    const { tournamentId } = req.query;
    const leaderboard = await buildLeaderboard(tournamentId);
    res.json({ leaderboard });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

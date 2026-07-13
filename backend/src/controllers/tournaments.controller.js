import { listTournaments, createNewTournament } from '../services/tournaments.service.js';

export const getTournaments = async (req, res) => {
  try {
    const tournaments = await listTournaments();
    res.json({ tournaments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const createTournament = async (req, res) => {
  try {
    const tournament = await createNewTournament(req.body);
    res.status(201).json({ success: true, tournament });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

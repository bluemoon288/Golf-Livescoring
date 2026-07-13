import { saveScore } from '../services/scores.service.js';

export const submitScore = async (req, res) => {
  try {
    const score = await saveScore(req.body);
    res.status(201).json({ success: true, score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

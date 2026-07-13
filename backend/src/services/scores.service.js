import db from '../models/db.js';

export const saveScore = async (data) => {
  const { playerId, roundId, hole, gross, net } = data;

  const result = await db.query(
    `INSERT INTO scores (player_id, round_id, hole, gross, net)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [playerId, roundId, hole, gross, net]
  );

  return result.rows[0];
};

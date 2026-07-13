
import db from '../models/db.js';

export const buildLeaderboard = async (tournamentId) => {
  const result = await db.query(
    `SELECT p.id AS player_id,
            p.name AS player_name,
            SUM(s.gross) AS gross_total,
            SUM(s.net) AS net_total
     FROM scores s
     JOIN rounds r ON s.round_id = r.id
     JOIN tournaments t ON r.tournament_id = t.id
     JOIN players p ON s.player_id = p.id
     WHERE t.id = $1
     GROUP BY p.id, p.name
     ORDER BY net_total ASC`,
    [tournamentId]
  );

  return result.rows;
};

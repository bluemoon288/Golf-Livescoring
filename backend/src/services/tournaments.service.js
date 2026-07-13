import db from '../models/db.js';

export const listTournaments = async () => {
  const result = await db.query(
    `SELECT id, name, date, format
     FROM tournaments
     ORDER BY date DESC`
  );
  return result.rows;
};

export const createNewTournament = async (data) => {
  const { name, date, format } = data;

  const result = await db.query(
    `INSERT INTO tournaments (name, date, format)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, date, format]
  );

  return result.rows[0];
};

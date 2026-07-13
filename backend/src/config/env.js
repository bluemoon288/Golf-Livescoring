export const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/golf_livescoring'
};

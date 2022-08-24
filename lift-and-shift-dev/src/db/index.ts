import path from "path";
import { Pool } from "node-postgres";
import { migrate } from "postgres-migrations";
import dotenv from "dotenv";
dotenv.config();

const poolConfig = {
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  max: Number(process.env.DB_POOL_SIZE),
  idleTimeoutMillis: Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
  connectionTimeoutMillis: Number(
    process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT
  ),
};

const pool = new Pool(poolConfig);

const db = {
  runMigrations: async (): Promise<void> => {
    const client = await pool.connect();
    try {
      await migrate({ client }, path.join(__dirname, "migrations/sql"));
    } catch (err) {
      console.error("Error running migrations", err);
    } finally {
      client.release();
    }
  },
};

export default db;
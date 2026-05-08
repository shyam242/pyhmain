import { Pool, PoolClient } from "pg";

const databaseUrl = process.env.DATABASE_URL;
const user = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const host = process.env.PGHOST;
const port = process.env.PGPORT;
const database = process.env.PGDATABASE;

if (!databaseUrl && !(user && password && host && port && database)) {
  throw new Error(
    "Please define DATABASE_URL or PGUSER/PGPASSWORD/PGHOST/PGPORT/PGDATABASE environment variables"
  );
}

const pool = new Pool(
  databaseUrl
    ? { connectionString: databaseUrl }
    : {
        user,
        password,
        host,
        port: parseInt(port || "5432", 10),
        database,
      }
);

export async function query(text: string, params?: any[]) {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Executed query", { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

export async function getClient(): Promise<PoolClient> {
  return pool.connect();
}

export { pool };

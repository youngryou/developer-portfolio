import { Pool } from 'pg'

const globalForPg = globalThis as unknown as {
  pgPool: Pool | undefined
}

const pool =
  globalForPg.pgPool ??
  new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPg.pgPool = pool
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = async (text: string, params?: any[]) => {
  const result = await pool.query(text, params)
  return result
}

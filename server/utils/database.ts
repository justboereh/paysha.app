import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

export const client = createClient({
  url: process.env.TURSO_URL as string,
  authToken: process.env.TURSO_TOKEN,
})

export const db = drizzle(client)

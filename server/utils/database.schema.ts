import { sqliteTable, text, blob } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

export const userSchema = sqliteTable('user', {
  id: text('id').primaryKey(),
  // other user attributes
})

export const sessionSchema = sqliteTable('user_session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userSchema.id),
  activeExpires: blob('active_expires', {
    mode: 'bigint',
  }).notNull(),
  idleExpires: blob('idle_expires', {
    mode: 'bigint',
  }).notNull(),
})

export const keySchema = sqliteTable('user_key', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userSchema.id),
  hashedPassword: text('hashed_password'),
})

export const sheetSchema = sqliteTable('sheet', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => nanoid()),
  name: text('name').notNull(),
})

export const bookSchema = sqliteTable('book', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => nanoid()),
  name: text('name').notNull(),
  sheets: text('sheets', { mode: 'json' }).references(() => sheetSchema.id),
})

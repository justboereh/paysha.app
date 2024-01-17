import { lucia } from 'lucia'
import { h3 } from 'lucia/middleware'
import { libsql } from '@lucia-auth/adapter-sqlite'
import { client } from './database'
import { github } from '@lucia-auth/oauth/providers'

export const auth = lucia({
  env: process.env.NODE_ENV ? 'DEV' : 'PROD',
  middleware: h3(),
  adapter: libsql(client, {
    user: 'user',
    key: 'user_key',
    session: 'user_session',
  }),
  getUserAttributes: (data) => {
    return {
      // @ts-expect-error
      githubUsername: data.username,
    }
  },
})
const runtimeConfig = useRuntimeConfig()

export const githubAuth = github(auth, {
  clientId: runtimeConfig.githubClientId,
  clientSecret: runtimeConfig.githubClientSecret,
})

export type Auth = typeof auth

import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()

// export default NuxtAuthHandler({
//   secret: runtimeConfig.secretKey,
//   providers: [
//     // @ts-expect-error
//     GithubProvider.default({
//       clientId: runtimeConfig.githubClientId,
//       clientSecret: runtimeConfig.githubClientSecret,
//     }),
//   ],
// })

export default defineEventHandler(() => {})

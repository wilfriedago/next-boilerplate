import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
// eslint-disable-next-line import/prefer-default-export
export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform(val => val === 'true'),
    CLERK_SECRET_KEY: z.string().nonempty()
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().nonempty(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().nonempty()
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
  }
})

import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { type NextRequest } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: (req: NextRequest) => !req.nextUrl.pathname.startsWith('/dashboard'),
  ignoredRoutes: (req: NextRequest) => !req.nextUrl.pathname.startsWith('/dashboard'),
  // eslint-disable-next-line consistent-return
  afterAuth(auth, req) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}

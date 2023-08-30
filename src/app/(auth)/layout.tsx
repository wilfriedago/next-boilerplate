import { ClerkProvider } from '@clerk/nextjs'
import type { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return <ClerkProvider>{children}</ClerkProvider>
}

import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export default function CenteredLayout({ children }: PropsWithChildren) {
  const { userId } = auth()

  if (userId) redirect('/dashboard')

  return <div className="flex min-h-screen items-center justify-center">{children}</div>
}

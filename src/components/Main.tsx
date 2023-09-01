import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import { AppConfig } from '@/shared/configs'

export const Main = ({ children }: PropsWithChildren) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">{AppConfig.title}</h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>

        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href="/" className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/portfolio/" className="border-none text-gray-700 hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href="/sign-in/" className="border-none text-gray-700 hover:text-gray-900">
                  Sign in
                </Link>
              </li>

              <li className="mr-6">
                <Link href="/sign-up/" className="border-none text-gray-700 hover:text-gray-900">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-5 text-xl">{children}</main>
    </div>
  </div>
)

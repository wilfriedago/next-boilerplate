import type { Metadata } from 'next'

import Counter from '@/components/Counter'
import { Main } from '@/templates/Main'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my Home page!'
}

const HomePage = () => (
  <Main>
    <Counter />
    <p>
      Welcome to my Home page! Here you will find a carefully curated collection of my work and accomplishments. Through
      this Home, I&apos;m to showcase my expertise, creativity, and the value I can bring to your projects.
    </p>
  </Main>
)

export default HomePage

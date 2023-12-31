import type { Metadata } from 'next'

import { Hello } from '@/components/Hello'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard'
}

const Dashboard = () => (
  <div>
    <Hello />
  </div>
)

export default Dashboard

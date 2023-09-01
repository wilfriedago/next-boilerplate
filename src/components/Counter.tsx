'use client'

import { useState } from 'react'

import { Button } from './Button'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button intent="secondary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  )
}

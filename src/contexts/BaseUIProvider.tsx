'use client'

import { BaseProvider, LightTheme } from 'baseui'
import { type PropsWithChildren } from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

const engine = new Styletron()

export const BaseUIProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
  )
}

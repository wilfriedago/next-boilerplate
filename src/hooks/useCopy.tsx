import React from 'react'

export interface UseCopyProps {
  timeout?: number
}

export const useCopy = ({ timeout = 2000 }: UseCopyProps) => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)

  const copy = (text: string) => {
    if (typeof window !== 'undefined' || !navigator.clipboard?.writeText) return

    if (!text) return

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), timeout)
    })
  }

  return { isCopied, copy }
}

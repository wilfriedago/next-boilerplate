import { cva, type VariantProps } from 'class-variance-authority'
import React, { type FC } from 'react'

import { cn } from '@/utils/helpers'

const styles = cva('fixed z-50', {
  variants: {
    position: {
      'bottom-right': 'bottom-16 right-0',
      'bottom-left': 'bottom-16 left-0',
      'top-right': 'right-0 top-16',
      'top-left': 'left-0 top-16'
    }
  },
  defaultVariants: {
    position: 'bottom-left'
  }
})

export type ScreenSizeDetectorProps = VariantProps<typeof styles>

export const ScreenSizeDetector: FC<ScreenSizeDetectorProps> = ({ position }) => {
  return (
    <div className={cn(styles({ position }))}>
      <div className="flex h-6 w-8 items-center justify-center rounded-r-md text-xs font-bold text-black">
        <span className="4xl:block 3xl:block hidden bg-yellow-300 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
          4XL
        </span>
        <span className="3xl:hidden hidden bg-red-300 text-base sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
          3XL
        </span>
        <span className="hidden bg-blue-300 text-sm sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">2XL</span>
        <span className="hidden bg-green-300 sm:hidden md:hidden lg:block xl:hidden">XL</span>
        <span className="hidden bg-violet-300 sm:hidden md:block lg:hidden xl:hidden">LG</span>
        <span className="hidden bg-orange-300 sm:block md:hidden lg:hidden xl:hidden">MD</span>
        <span className="block bg-pink-300 sm:hidden md:hidden lg:hidden xl:hidden">SM</span>
      </div>
    </div>
  )
}

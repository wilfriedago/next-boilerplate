import type { Meta, StoryObj } from '@storybook/react'

import { ScreenSizeDetector } from './ScreenSizeDetector'

const meta = {
  title: 'Screen size detector',
  component: ScreenSizeDetector,
  tags: ['autodocs'],
  argTypes: {
    position: {
      defaultValue: 'bottom-left',
      description: 'Screen size detector position',
      type: 'string',
      options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof ScreenSizeDetector>

type Story = StoryObj<typeof ScreenSizeDetector>

export const Default = {
  args: {
    position: 'bottom-left'
  }
} satisfies Story

export default meta

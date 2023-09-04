import { render, screen } from '@testing-library/react'

import { AppConfig } from '@/shared/configs'

import { Main } from './Main'

describe('Main template', () => {
  it('renders the title and description', () => {
    render(
      <Main>
        <div>Content goes here</div>
      </Main>
    )

    const titleElement = screen.getByText(AppConfig.title)
    const descriptionElement = screen.getByText(AppConfig.description)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <Main>
        <div>Content goes here</div>
      </Main>
    )

    const homeLink = screen.getByRole('link', { name: /Home/i })
    const portfolioLink = screen.getByRole('link', { name: /Portfolio/i })
    const signInLink = screen.getByRole('link', { name: /Sign in/i })
    const signUpLink = screen.getByRole('link', { name: /Sign up/i })

    expect(homeLink).toBeInTheDocument()
    expect(portfolioLink).toBeInTheDocument()
    expect(signInLink).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })

  it('renders child content', () => {
    render(
      <Main>
        <div>Content goes here</div>
      </Main>
    )

    const contentElement = screen.getByText('Content goes here')

    expect(contentElement).toBeInTheDocument()
  })
})

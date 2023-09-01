import { expect, test } from '@playwright/test'

test('should navigate to the portfolio page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')

  // Find an element with the text 'Portfolio Page' and click on it
  await page.click('text=Portfolio')

  // The new url should be "/portfolio" (baseURL is used there)
  await expect(page).toHaveURL('/portfolio')

  // The new page should contain an h1 with "Portfolio Page"
  await expect(page.locator('h1')).toContainText('Portfolio')
})

// @ts-check
import { expect, test } from '@playwright/test'

test.describe('dom exercises', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Page is launched and has title and h1', async ({ page }) => {
    await expect(page).toHaveTitle('JavaScript exercises')
    await expect(
      page.getByRole('heading', { name: 'JavaScript exercises' }),
    ).toBeVisible()
  })

  test('Dom exercise, element changed to red', async ({ page }) => {
    const l = page.locator('#change-my-color')

    await expect(l).toBeVisible()
    await expect(l).toHaveCSS('color', 'rgb(255, 0, 0)')
  })

  test('Dom exercise, add elements to dom', async ({ page }) => {
    const l = page.locator('#add-your-elements-in-this-element')

    await expect(l.filter({ hasText: 'Bonjour' })).toHaveCount(1)
    await expect(l.filter({ hasText: 'Toto' })).toHaveCount(1)
  })

  test('Dom exercise, user list correctly generated', async ({ page }) => {
    const l = page.locator('#add-list-here')

    await expect(l.filter({ hasText: 'Toto' })).toHaveCount(1)
    await expect(l.filter({ hasText: 'Tutu' })).toHaveCount(1)
    await expect(l.getByText('Tata')).toHaveCSS(
      'background-color',
      'rgb(112, 161, 255)',
    )
    await expect(l.getByText('Titi')).toHaveCSS(
      'background-color',
      'rgb(164, 176, 190)',
    )
  })
})

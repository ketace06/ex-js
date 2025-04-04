import { expect, test } from '@playwright/test'

test.describe('fetch exercise', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Fetch', async ({ page }) => {
    await page.locator('#click-to-fetch').click()
    await expect(page.getByText('MM~:~ 00~:::::~ 00~:~MM')).toHaveCount(1)
  })
})

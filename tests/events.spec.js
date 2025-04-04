import { expect, test } from '@playwright/test'

test.describe('events exercises', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Alert dialog is fired ?', async ({ page }) => {
    const dialogPromise = page.waitForEvent('dialog', (dialog) => {
      dialog.dismiss()
      return true
    })
    await page.locator('#click-me').click()
    await dialogPromise
  })

  test('React to a click event', async ({ page }) => {
    const dialogPromise = page.waitForEvent('dialog', async (dialog) => {
      await expect(dialog.type()).toContain('alert')
      await expect(dialog.message()).toBe('Button clicked')
      await dialog.accept().catch(() => {})
      return true
    })
    await page.locator('#click-me').click()
    await dialogPromise
  })

  test('React to a click event, dom element creation', async ({ page }) => {
    const l = page.locator('#click-me')
    await l.click()
    await expect(page.getByText('clicked')).toHaveCount(1)
    await expect(page.getByText('clicked')).toBeVisible()
  })

  test('Alert dialog is fired on enter Key ?', async ({ page }) => {
    const dialogPromise = page.waitForEvent('dialog', (dialog) => {
      dialog.dismiss()
      return true
    })
    await page.getByLabel('Input write-some-text').click()
    await page.getByLabel('Input write-some-text').fill('bonjour')
    await page.getByLabel('Input write-some-text').press('Enter')
    await dialogPromise
  })

  test('React to enter key and display alert with input content', async ({
    page,
  }) => {
    await page.getByLabel('Input write-some-text').click()
    await page.getByLabel('Input write-some-text').fill('bonjour')
    const dialogPromise = page.waitForEvent('dialog', async (dialog) => {
      await expect(dialog.type()).toContain('alert')
      await expect(dialog.message()).toBe('bonjour')
      dialog.dismiss().catch(() => {})
      return true
    })
    await page.getByLabel('Input write-some-text').press('Enter')
    await dialogPromise
  })

  test('Add events on list on input change', async ({ page }) => {
    await page.getByLabel('Add text to list :').click()
    await page.getByLabel('Add text to list :').fill('Bonjour in list')
    await page.getByLabel('Add text to list :').press('Enter')
    await expect(
      page.locator('#list').getByText('Bonjour in list'),
    ).toHaveCount(1)
    await expect(page.getByLabel('Add text to list :')).toHaveValue('')
    await page.getByLabel('Add text to list :').click()
    await page.getByLabel('Add text to list :').fill('Test in list')
    await page.getByText('React to change events').click()
    await expect(page.locator('#list').getByText('Test in list')).toHaveCount(1)
    await expect(page.getByLabel('Add text to list :')).toHaveValue('')
  })

  test('Nothing is added to list on empty input', async ({ page }) => {
    await page.getByLabel('Add text to list :').click()
    await page.getByLabel('Add text to list :').fill('dfsdf')
    await page.getByLabel('Add text to list :').press('Enter')
    await page.getByLabel('Add text to list :').fill('')
    await page.getByLabel('Add text to list :').press('Enter')
    await expect(
      page.locator(
        'html > body > main > section:nth-of-type(2) > div:nth-of-type(3) > ul > li:nth-of-type(2)',
      ),
    ).toHaveCount(0)
  })

  test('Should remove elements in list on click', async ({ page }) => {
    await page.getByLabel('Add text to list :').fill('dfsdfsdfsfd')
    await page.getByLabel('Add text to list :').press('Enter')
    const l = page.locator('#list').getByText('dfsdfsdfsfd')
    await expect(l).toHaveCount(1)
    await l.click()
    await expect(l).toHaveCount(0)
  })

  test('Should display mouse coordinates', async ({ page }) => {
    const l = page.locator('#mouse-coordinates')
    await page.mouse.move(200, 200)
    await expect(l).toHaveText('x: 200, y: 200')
    await page.mouse.move(457, 384)
    await expect(l).toHaveText('x: 457, y: 384')
  })

  test('Should change labels on mouseover', async ({ page }) => {
    await expect(page.getByText('Focus me :')).toHaveCount(1)
    await expect(page.getByText('A second label ! just for fun')).toHaveCount(1)
    await page.locator('#focus-me').hover()
    await expect(page.getByText('Yes, you hover me !')).toHaveCount(2)
    await page.locator('#mouse-coordinates').hover()
    await expect(page.getByText('Focus me :')).toHaveCount(1)
    await expect(page.getByText('A second label ! just for fun')).toHaveCount(1)
  })

  test('Color changes on focus', async ({ page }) => {
    const l = page.locator('#focus-me')
    await expect(l).toHaveCSS('border-color', 'rgb(100, 149, 237)')
    await l.focus()
    await expect(l).not.toHaveCSS('border-color', 'rgb(100, 149, 237)')
    const color = await l.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue('border-color')
    })
    await page.getByLabel('Add text to list :').focus()
    await expect(l).toHaveCSS('border-color', 'rgb(100, 149, 237)')
    await l.focus()
    await expect(l).not.toHaveCSS('border-color', color)
  })

  test('Change border default color and label color', async ({ page }) => {
    const l = page.locator('#focus-me')
    await expect(l).toHaveCSS('border-color', 'rgb(100, 149, 237)')
    await l.focus()
    await expect(l).not.toHaveCSS('border-color', 'rgb(100, 149, 237)')
    await l.fill('B')
    await page.getByLabel('Add text to list :').focus()
    await expect(l).not.toHaveCSS('border-color', 'rgb(100, 149, 237)')
    const color = await l.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue('border-color')
    })
    await expect(page.getByText('Focus me :')).toHaveCSS('border-color', color)
    await expect(page.getByText('A second label ! just for fun')).toHaveCSS(
      'border-color',
      color,
    )
  })
})

// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('SETUP', () => {


  test.beforeAll('', async () => {
    
  })
  test.beforeEach('', async ({ page }) => {
    await page.goto('/');
  })

  test.afterEach('', async () => {

  })

  test.afterAll('', async () => {
  })

  test('SETUP - @setup', async ({ page }) => {
    await test.step('Step 1: Visit main URL', async ()=>{
      await page.goto('https://playwright.dev/');
    })
    
    await test.step('Step 2: Check title', async ()=>{
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    })
    
  });
  
  test('SETUP 1 - @setup', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});



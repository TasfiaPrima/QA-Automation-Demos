const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login Tests', () => {
  
  test('Valid Login Should Succeed', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.inventory_item')).toHaveCountGreaterThan(0);
  });

  test('Invalid Login Should Show Error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'wrong_user');
    await page.fill('[data-test="password"]', 'wrong_pass');
    await page.click('[data-test="login-button"]');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});

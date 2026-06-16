import { test, expect, chromium } from '@playwright/test';

test('Slow Motion and Video Recording demo', async () => {
  // Applying slow motion and video recording options within the test itself
  const browser = await chromium.launch({
    slowMo: 1000, // Slow down actions by 1 second
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', // Directory to save videos
      size: { width: 1280, height: 720 }, // Set video resolution
    },
  });

  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
    
  await browser.close();
});
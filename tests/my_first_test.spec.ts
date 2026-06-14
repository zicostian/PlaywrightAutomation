import { test, expect } from '@playwright/test';

test('Google page title verification', async ({page}) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);   
});
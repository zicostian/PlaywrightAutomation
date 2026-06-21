# PlaywrightAutomation

This repository contains a Playwright test automation project written in TypeScript. It demonstrates multi-browser parallel runs, use of `async`/`await`, and key assertions with Playwright such as `expect` API.

It also showcases video recording capabilities and grouped test cases for better reporting and organization.

## Setup

### 1. Prerequisites

- Node.js 18+ installed
- npm (bundled with Node.js)
- Git installed
- A GitHub account if you intend to push this project to a remote repository

### 2. Installation

From the project root, install dependencies:

```bash
npm install
```

Install Playwright browser binaries:

```bash
npx playwright install
```

## How to run the tests

Run all Playwright tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/google_page_test.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

## Key highlights

- The project is configured for multi-browser runs in parallel using Playwright projects for `chromium`, `firefox`, and `webkit`.
- Tests use `async` and `await` to handle asynchronous browser actions.
- Assertions use `expect` from `@playwright/test`.
- The Playwright configuration enables `fullyParallel: true`, so tests can execute in parallel across files.

## Example test pattern (E.g: Marketplace Checkout)

A typical test in this project looks like:

```ts
import { test, expect } from '@playwright/test';

test('Add to Cart and Checkout Flow', async ({ page }) => {  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Zico');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Test');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('16421');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});
```

## Notes

- The repository currently uses TypeScript and Playwright with `type: commonjs` in `package.json`.
- To add more tests, place them under the `tests/` directory and follow the Playwright test pattern.

## Author

[Zico Agustian Rusdy](https://linkedin.com/in/zicostian)

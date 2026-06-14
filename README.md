# PlaywrightAutomation

This repository contains a Playwright test automation project written in TypeScript. It demonstrates multi-browser parallel runs, use of `async`/`await`, and key assertions with Playwright such as `expect` API.

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
npx playwright test tests/my_first_test.spec.ts
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

## Example test pattern

A typical test in this project looks like:

```ts
import { test, expect } from '@playwright/test';

test('Google page title verification', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
```

## Notes

- The repository currently uses TypeScript and Playwright with `type: commonjs` in `package.json`.
- To add more tests, place them under the `tests/` directory and follow the Playwright test pattern.

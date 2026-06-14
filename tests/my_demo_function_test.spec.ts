import { test, expect } from '@playwright/test';
import { hello, helloWorld } from './demo/hello';

test('call hello functions', () => {
    hello();
    helloWorld();
});
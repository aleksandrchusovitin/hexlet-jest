import { test, expect } from '@jest/globals';
import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('Hello')).toEqual('olleH');
  expect(reverse('')).toEqual('');
});

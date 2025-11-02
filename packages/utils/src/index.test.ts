import { describe, it, expect } from 'vitest';
import { formatDate, sleep, debounce } from './index';

describe('utils', () => {
  it('formatDate should format a date', () => {
    const date = new Date('2025-01-01');
    const formatted = formatDate(date);
    expect(formatted).toContain('2025');
  });

  it('sleep should wait for the specified time', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(95);
  });

  it('debounce should debounce function calls', async () => {
    let count = 0;
    const increment = () => count++;
    const debounced = debounce(increment, 50);

    debounced();
    debounced();
    debounced();

    expect(count).toBe(0);
    await sleep(100);
    expect(count).toBe(1);
  });
});

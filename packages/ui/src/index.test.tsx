import { describe, it, expect } from 'vitest';

describe('ui components', () => {
  it('exports Button and Card', async () => {
    const components = await import('./index');
    expect(components.Button).toBeDefined();
    expect(components.Card).toBeDefined();
  });
});

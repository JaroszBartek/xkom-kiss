import { describe, it, expect } from 'vitest';
import { ariaDescribedbyFactory } from '../ariaDescribedbyFactory';

describe('ariaDescribedbyFactory', () => {
  const testId = 'test-field';

  it('should return empty string when no description and no error', () => {
    expect(ariaDescribedbyFactory(testId, false, false)).toBe('');
  });

  it('should return description id when has description but no error', () => {
    expect(ariaDescribedbyFactory(testId, true, false)).toBe('test-field-description');
  });

  it('should return error id when has error but no description', () => {
    expect(ariaDescribedbyFactory(testId, false, true)).toBe(' test-field-error');
  });

  it('should return both ids when has both description and error', () => {
    expect(ariaDescribedbyFactory(testId, true, true)).toBe(
      'test-field-description test-field-error'
    );
  });

  it('should handle empty id', () => {
    expect(ariaDescribedbyFactory('', true, true)).toBe('');
  });
});

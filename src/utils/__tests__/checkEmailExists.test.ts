import { describe, it, expect } from 'vitest';
import { checkEmailExists } from '../checkEmailExist';

describe('checkEmailExists', () => {
  const mockState = {
    byId: {
      '1': { email: 'test@example.com' },
      '2': { email: 'another@example.com' },
    },
  };

  it('should return true when email exists', () => {
    expect(checkEmailExists(mockState, 'test@example.com')).toBe(true);
  });

  it('should return false when email does not exist', () => {
    expect(checkEmailExists(mockState, 'nonexistent@example.com')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(checkEmailExists(mockState, 'TEST@EXAMPLE.COM')).toBe(true);
  });

  it('should handle empty state', () => {
    expect(checkEmailExists({ byId: {} }, 'test@example.com')).toBe(false);
  });
});

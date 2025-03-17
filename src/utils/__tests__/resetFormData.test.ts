import { describe, it, expect } from 'vitest';
import { resetFormData } from '../resetFormData';

describe('resetFormData', () => {
  it('should reset values to empty strings', () => {
    const initialState = {
      name: 'John',
      email: 'john@example.com',
    };

    const result = resetFormData(initialState);
    expect(result).toEqual({
      name: '',
      email: '',
    });
  });

  it('should handle empty object', () => {
    const initialState = {};
    const result = resetFormData(initialState);
    expect(result).toEqual({});
  });

  it('should not modify the original object', () => {
    const initialState = { name: 'John' };
    resetFormData(initialState);
    expect(initialState.name).toBe('John');
  });
});

import { describe, it, expect } from 'vitest';
import { validateInput } from '../validateInput';

describe('validateInput', () => {
  const createMockInput = (props: Partial<HTMLInputElement> = {}): HTMLInputElement =>
    ({
      value: '',
      required: false,
      type: 'text',
      pattern: '',
      minLength: -1,
      maxLength: -1,
      ...props,
    }) as HTMLInputElement;

  describe('required validation', () => {
    it('should return error message when field is required and empty', () => {
      const input = createMockInput({ required: true, value: '' });
      expect(validateInput(input)).toBe('To pole jest wymagane');
    });

    it('should not return error when field is required and has value', () => {
      const input = createMockInput({ required: true, value: 'test' });
      expect(validateInput(input)).toBeUndefined();
    });
  });

  describe('email validation', () => {
    it('should validate correct email format', () => {
      const input = createMockInput({ type: 'email', value: 'test@example.com' });
      expect(validateInput(input)).toBeUndefined();
    });

    it('should return error for invalid email format', () => {
      const input = createMockInput({ type: 'email', value: 'invalid-email' });
      expect(validateInput(input)).toBe('Email musi zawierać @');
    });
  });

  describe('length validation', () => {
    it('should validate minLength', () => {
      const input = createMockInput({ minLength: 3, value: 'ab' });
      expect(validateInput(input)).toBe('Minimalna ilość znaków to 3');
    });

    it('should validate maxLength', () => {
      const input = createMockInput({ maxLength: 3, value: 'abcd' });
      expect(validateInput(input)).toBe('Maxymalna ilość znaków to 3');
    });
  });
});

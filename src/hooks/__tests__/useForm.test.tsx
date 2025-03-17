import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useForm } from '../useForm';

describe('useForm', () => {
  const initialState = {
    email: '',
    name: '',
  };

  it('should initialize with initial state', () => {
    const { result } = renderHook(() => useForm(initialState, vi.fn()));

    expect(result.current.formData).toEqual(initialState);
    expect(result.current.fieldsError).toEqual({});
  });

  it('should update form data on input change', () => {
    const { result } = renderHook(() => useForm(initialState, vi.fn()));

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'test@example.com',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.email).toBe('test@example.com');
  });

  it('should validate email field on change', () => {
    const { result } = renderHook(() => useForm(initialState, vi.fn()));

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'invalid-email',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.fieldsError.email).toBe('Email musi zawierać @');
  });

  it('should clear field error when input becomes valid', () => {
    const { result } = renderHook(() => useForm(initialState, vi.fn()));

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'invalid-email',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'valid@email.com',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.fieldsError.email).toBeUndefined();
  });

  it('should not submit form if there are validation errors', () => {
    const onSubmit = vi.fn();
    const { result } = renderHook(() => useForm(initialState, onSubmit));

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'invalid-email',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should submit form with valid data and reset form', () => {
    const onSubmit = vi.fn();
    const { result } = renderHook(() => useForm(initialState, onSubmit));

    act(() => {
      result.current.handleInputChange({
        target: {
          name: 'email',
          value: 'test@example.com',
          type: 'email',
        },
      } as React.ChangeEvent<HTMLInputElement>);

      result.current.handleInputChange({
        target: {
          name: 'name',
          value: 'John Doe',
          type: 'text',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      name: 'John Doe',
    });

    expect(result.current.formData).toEqual(initialState);
  });
});

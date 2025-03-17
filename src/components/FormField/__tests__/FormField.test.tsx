import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormField } from '../FormField';
import '@testing-library/jest-dom';

describe('FormField', () => {
  const defaultProps = {
    id: 'test-field',
    label: 'Test Label',
    name: 'test',
    value: '',
    onChange: vi.fn(),
  };

  it('should render with label', () => {
    render(<FormField {...defaultProps} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('should render input with correct attributes', () => {
    render(<FormField {...defaultProps} />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('id', 'test-field');
    expect(input).toHaveAttribute('name', 'test');
    expect(input).toHaveAttribute('placeholder', ' ');
  });

  it('should show description when provided', () => {
    const description = 'This is a test description';
    render(<FormField {...defaultProps} description={description} />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveAttribute('id', 'test-field-description');
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'test-field-description'
    );
  });

  it('should show error message when provided', () => {
    const error = 'This field is required';
    render(<FormField {...defaultProps} error={error} />);

    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveAttribute('id', 'test-field-error');
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', ' test-field-error');
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should show both description and error when provided', () => {
    const description = 'Test description';
    const error = 'Test error';
    render(<FormField {...defaultProps} description={description} error={error} />);

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(error)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'test-field-description test-field-error'
    );
  });

  it('should handle valid state correctly', () => {
    render(<FormField {...defaultProps} value="test value" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test value');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('should handle invalid state correctly', () => {
    render(<FormField {...defaultProps} value="test value" error="Error message" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('should pass through additional HTML input attributes', () => {
    render(
      <FormField
        {...defaultProps}
        type="email"
        required
        maxLength={50}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('maxLength', '50');
    expect(input).toHaveAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
    expect(input).toBeDisabled();
  });
});

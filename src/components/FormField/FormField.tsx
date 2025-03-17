import React from 'react';
import styles from './FormField.module.css';
import { Label } from '../Label';
import { Input } from '../Input';
import { ariaDescribedbyFactory } from '../../utils';

type FormFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label: string;
  error?: string;
  description?: string;
};

export const FormField = ({
  id,
  label,
  value,
  error,
  description,
  ...restProps
}: FormFieldProps) => {
  const invalid = !!error;
  const valid = !invalid && !!value;
  const ariaDescribedby = ariaDescribedbyFactory(id, !!description, !!error);

  return (
    <div className={styles.formField}>
      <Input
        id={id}
        {...restProps}
        invalid={invalid}
        valid={valid}
        value={value}
        placeholder=" "
        aria-describedby={ariaDescribedby}
        aria-invalid={invalid}
      />
      <Label htmlFor={id} invalid={invalid}>
        {label}
      </Label>
      {description && (
        <FormFieldDescription id={`${id}-description`}>{description}</FormFieldDescription>
      )}
      {error && <FormFieldError id={`${id}-error`}>{error}</FormFieldError>}
    </div>
  );
};

type FormFieldHelpersProps = {
  id?: string;
  children: React.ReactNode;
};

export const FormFieldDescription = ({ id, children }: FormFieldHelpersProps) => (
  <p id={id} className={styles.formDescription}>
    {children}
  </p>
);

export const FormFieldError = ({ id, children }: FormFieldHelpersProps) => (
  <p id={id} className={styles.formError}>
    {children}
  </p>
);

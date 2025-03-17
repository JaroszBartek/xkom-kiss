import React from 'react';
import styles from './FormField.module.css';
import { Input } from '../Input/Input';
import { Label } from '../Label';

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
  return (
    <div className={styles.formField}>
      <Input id={id} {...restProps} error={error} value={value} placeholder=" " />
      <Label htmlFor={id}>{label}</Label>
      {description && <p className={styles.formDescription}>{description}</p>}
      {error && <p className={styles.formError}>{error}</p>}
    </div>
  );
};

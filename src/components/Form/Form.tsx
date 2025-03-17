import React from 'react';
import styles from './Form.module.css';

type FormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & { children: React.ReactNode };

export const Form = ({ children, ...restProps }: FormProps) => (
  <form className={styles.form} {...restProps}>
    {children}
  </form>
);

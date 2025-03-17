import React from 'react';
import styles from './Button.module.css';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children: React.ReactNode };

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};

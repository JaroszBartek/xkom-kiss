import styles from './Input.module.css';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { invalid: boolean; valid: boolean };

export const Input = ({ invalid, valid, ...restProps }: InputProps) => {
  const className = `${styles.input} ${invalid ? styles.error : ''} ${valid ? styles.success : ''}`;
  return <input className={className} {...restProps} />;
};

import styles from './Input.module.css';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: string };

export const Input = (props: InputProps) => {
  const invalid = !!props.error;
  const valid = !invalid && props.value;

  const className = `${styles.input} ${invalid ? styles.error : ''} ${valid ? styles.success : ''}`;
  return <input className={className} {...props} />;
};

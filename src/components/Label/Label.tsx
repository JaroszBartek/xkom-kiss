import React from 'react';
import styles from './Label.module.css';

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & { invalid: boolean };

export const Label = ({ invalid, ...restProps }: LabelProps) => {
  const className = `${styles.label} ${invalid ? styles.error : ''}`;
  return <label className={className} {...restProps} />;
};

import React from 'react';
import styles from './Label.module.css';

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const Label = (props: LabelProps) => {
  return <label className={styles.label} {...props} />;
};

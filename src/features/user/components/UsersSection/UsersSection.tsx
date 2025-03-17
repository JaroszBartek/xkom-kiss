import { ReactNode } from 'react';
import styles from './UsersSection.module.css';

type UsersSectionProps = {
  children: ReactNode;
};

export const UsersSection = ({ children }: UsersSectionProps) => (
  <section className={styles.section}>{children}</section>
);

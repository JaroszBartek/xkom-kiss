import { ReactNode } from 'react';
import styles from './UsersSection.module.css';
import { UsersProvider } from '../../store';

type UsersSectionProps = {
  children: ReactNode;
};

export const UsersSection = ({ children }: UsersSectionProps) => (
  <UsersProvider>
    <section className={styles.section}>{children}</section>
  </UsersProvider>
);

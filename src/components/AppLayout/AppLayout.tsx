import { ReactNode } from 'react';
import styles from './AppLayout.module.css';

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <div className={styles.app}>{children}</div>
);

import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import styles from './layout.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.children}>{children}</div>
    </div>
  );
}

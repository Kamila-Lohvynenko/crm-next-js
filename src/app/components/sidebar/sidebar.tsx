import React from 'react';
import Image from 'next/image';
import SidebarItem from '../sidebar-item/sidebar-item';
import styles from './sidebar.module.scss';

// export interface SidebarProps {}

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className={styles.list}>
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className={styles.button}>
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span>Exit</span>
        </button>
      </div>
    </aside>
  );
}

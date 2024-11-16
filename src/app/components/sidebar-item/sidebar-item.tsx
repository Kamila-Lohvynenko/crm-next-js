import React from 'react';
import Image from 'next/image';
import styles from './sidebar-item.module.scss';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const SidebarItem = ({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) => {
  return (
    <li>
      <a href={pathname} className={styles.link}>
        <Image width={18} height={18} src={src} alt={alt} />
        <span>{children}</span>
      </a>
    </li>
  );
};

export default SidebarItem;

'use client';

/* eslint-disable react-hooks/rules-of-hooks */

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavLinkThatEndsWith.module.css';

const ΣύνδεσμοςΠουΤελειώνειΜε = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.endsWith(href)
          ? styles['nav-icon'] + ' ' + styles.active
          : styles['nav-icon']
      }
    >
      {children}
    </Link>
  );
};
export default ΣύνδεσμοςΠουΤελειώνειΜε;

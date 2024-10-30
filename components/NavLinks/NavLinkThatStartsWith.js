'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavLinkThatStartsWith.module.css';

const NavLinkThatStartsWith = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? styles['nav-icon'] + ' ' + styles.active
          : styles['nav-icon']
      }
    >
      {children}
    </Link>
  );
};
export default NavLinkThatStartsWith;

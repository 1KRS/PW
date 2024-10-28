'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavLinkThatEndsWith.module.css';

const NavLinkThatEndsWith = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.endsWith(href) && styles.active}>
      {children}
    </Link>
  );
};
export default NavLinkThatEndsWith;

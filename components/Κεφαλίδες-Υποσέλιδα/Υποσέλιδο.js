'use client';

import styles from './Υποσέλιδο.module.css';

import Link from 'next/link';
import ΕικονίδιαΜΚΔ from '../SocialIcons';
import Μετάφραση from '../Μετάφραση';

import { usePathname } from 'next/navigation';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

const Footer = () => {
  const path = usePathname();

  const { τρέχονΈτος } = στοιχείαΗμερομηνιών();

  return (
    <footer className={styles.υποσέλιδο}>
      <div className={styles['περιέκτης-κεντρικού-τμήματος-υποσέλιδου']}>
        <nav className={styles['γραμμή-πλήκτρων-υποσέλιδου']}>
          <ul className={styles.στοιχεία}>
            <Link
              href="/programming/faq"
              className={
                path.startsWith('/programming/faq')
                  ? styles.στοιχείο + ' ' + styles.active
                  : styles.στοιχείο
              }
            >
              <Μετάφραση>Συχνές Ερωτήσεις</Μετάφραση>
            </Link>
            <ΕικονίδιαΜΚΔ />
            <Link
              href={'/programming/about/me'}
              className={
                path.startsWith('/programming/about')
                  ? styles.στοιχείο + ' ' + styles.active
                  : styles.στοιχείο
              }
            >
              <Μετάφραση>Σχετικά</Μετάφραση>
            </Link>
          </ul>
        </nav>
        <div className={styles['περιέκτης-πνευματικών-δικαιωμάτων']}>
          <div className={styles['όνομα-και-έτος']}>
            <Μετάφραση>Δημήτρης Μανωλόπουλος</Μετάφραση>
            {` © ${τρέχονΈτος} `}
          </div>
          <pre className={styles['κενό-πνευματικών-δικαιωμάτων']}> </pre>
          <div className={styles['επιφύλαξη']}>
            <Μετάφραση>Επιφύλαξη Παντός Δικαιώματος</Μετάφραση>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

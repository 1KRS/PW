'use client';

import ΔυαδικήΒροχή from '@/components/Backgrounds/ΔυαδικήΒροχή';
import styles from './error.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

const Error = () => {
  return (
    <div className={styles['error']}>
      <ΔυαδικήΒροχή screenType="error" fontSize="14" speed="60" />
      <div className={styles.container}>
        <h1>500</h1>
        <div className={styles.text}>
          <h2>
            <Μετάφραση>Κάποιο λάθος προέκυψε</Μετάφραση>
          </h2>
          <Link href="/programming" className={styles.btn}>
            <Μετάφραση>Επιστροφή στην αρχική σελίδα</Μετάφραση>
          </Link>
        </div>
        <LanguagesContainer />
      </div>
    </div>
  );
};

export default Error;

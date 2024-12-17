'use client'

import BinaryRain from '@/components/Backgrounds/BinaryRain';
import styles from './error.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';

const Error = () => {
  return ( <div className={styles['error']}>
      <BinaryRain screenType="error" fontSize="14" speed="60" />
      <div className={styles.container}>
        <h1>500</h1>
        <div className={styles.text}>
          <h2>Κάποιο λάθος προέκυψε.</h2>
          {/* <p>Παρακαλούμε επιστρέψτε στην αρχική σελίδα.</p> */}

          <Link href="/programming" className={styles.btn}>
            Επιστροφή στην αρχική σελίδα
          </Link>
        </div>
        <LanguagesContainer />
      </div>
    </div>
)
}

export default Error;

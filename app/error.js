'use client';

import ΔυαδικήΒροχή from '@/components/Backgrounds/ΔυαδικήΒροχή';
import styles from './error.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

const Error = () => {
  return (
    <div className={styles['error']}>
      <ΔυαδικήΒροχή
        τύποςΟθόνης="error"
        μέγεθοςΣταγόνων={14}
        ταχύτηταΒροχής={80}
        καθυστέρησηΠαραγγελμάτων={8000}
        πιθανότηταΠαραγγελμάτων={0}
        απόσβεσηΠαραγγέλματος={2000}
      />
      <div className={styles.περιέκτης}>
        <h1>500</h1>
        <div className={styles.κείμενο}>
          <h2>
            <Μετάφραση>Κάποιο λάθος προέκυψε</Μετάφραση>
          </h2>
          <Link href="/programming" className={styles.πλήκτρο}>
            <Μετάφραση>Επιστροφή στην αρχική σελίδα</Μετάφραση>
          </Link>
        </div>
        <LanguagesContainer />
      </div>
    </div>
  );
};

export default Error;

'use client';

import ΔυαδικήΒροχή from '@/components/Backgrounds/ΔυαδικήΒροχή';
import styles from './error.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

const Σφάλμα = () => {
  return (
    <div className={styles['error']}>
      <ΔυαδικήΒροχή
        τύποςΟθόνης="error"
        μέγεθοςΣταγόνων={12}
        ταχύτηταΒροχής={80}
        πιθανότηταΠαραγγελμάτων={0}
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

export default Σφάλμα;

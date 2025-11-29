import ΔυαδικήΒροχή from '@/components/Backgrounds/ΔυαδικήΒροχή';
import styles from './not-found.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

const ΣελίδαΔενΒρέθηκε = () => {
  return (
    <div className={styles['not-found']}>
      <ΔυαδικήΒροχή
        τύποςΟθόνης="not-found"
        μέγεθοςΣταγόνων={12}
        ταχύτηταΒροχής={80}
        πιθανότηταΠαραγγελμάτων={0}
      />
      <div className={styles.περιέκτης}>
        <h1>404</h1>
        <div className={styles.κείμενο}>
          <h2>
            <Μετάφραση>Η σελίδα δεν βρέθηκε</Μετάφραση>
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

export default ΣελίδαΔενΒρέθηκε;

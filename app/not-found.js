import ΔυαδικήΒροχή from '@/components/Backgrounds/ΔυαδικήΒροχή';
import styles from './not-found.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <ΔυαδικήΒροχή screenType="not-found" fontSize="14" speed="60" />
      <div className={styles.container}>
        <h1>404</h1>
        <div className={styles.text}>
          <h2>
            <Μετάφραση>Η σελίδα δεν βρέθηκε</Μετάφραση>
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

export default NotFound;

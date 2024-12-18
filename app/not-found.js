import BinaryRain from '@/components/Backgrounds/BinaryRain';
import styles from './not-found.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
    <BinaryRain screenType="not-found" fontSize="14" speed="60" />
    <div className={styles.container}>
      <h1>404</h1>
      <div className={styles.text}>
        <h2>Η σελίδα δεν βρέθηκε</h2>
        {/* <p>Παρακαλούμε επιστρέψτε στην αρχική σελίδα.</p> */}

        <Link href="/programming" className={styles.btn}>
          Επιστροφή στην αρχική σελίδα
        </Link>
      </div>
      <LanguagesContainer />
    </div>
  </div>
  );
};

export default NotFound;

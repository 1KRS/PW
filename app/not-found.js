import BinaryRain from '@/components/Backgrounds/BinaryRain';
import styles from './not-found.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import TranslatedText from '@/components/TranslatedText';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <BinaryRain screenType="not-found" fontSize="14" speed="60" />
      <div className={styles.container}>
        <h1>404</h1>
        <div className={styles.text}>
          <h2>
            <TranslatedText>Η σελίδα δεν βρέθηκε</TranslatedText>
          </h2>
          <Link href="/programming" className={styles.btn}>
            <TranslatedText>Επιστροφή στην αρχική σελίδα</TranslatedText>
          </Link>
        </div>
        <LanguagesContainer />
      </div>
    </div>
  );
};

export default NotFound;

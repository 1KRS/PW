'use client'

import BinaryRain from '@/components/Backgrounds/BinaryRain';
import styles from './error.module.css';
import Link from 'next/link';
import LanguagesContainer from '@/components/LanguagesContainer';
import TranslatedText from '@/components/TranslatedText';

const Error = () => {
  return (
    <div className={styles['error']}>
      <BinaryRain screenType="error" fontSize="14" speed="60" />
      <div className={styles.container}>
        <h1>500</h1>
        <div className={styles.text}>
          <h2>
            <TranslatedText>Κάποιο λάθος προέκυψε</TranslatedText>
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

export default Error;

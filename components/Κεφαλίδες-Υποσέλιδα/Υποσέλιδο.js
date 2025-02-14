import Link from 'next/link';
import styles from './Υποσέλιδο.module.css';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

import SocialIcons from '../SocialIcons';
import TranslatedText from '../TranslatedText';

const Υποσέλιδο = () => {
  const { τρέχονΈτος } = στοιχείαΗμερομηνιών();

  return (
    <footer className={styles.υποσέλιδο}>
      <nav className={styles['home-bottom-nav']}>
        <ul className={styles.στοιχεία}>
          <Link href="/home" className={styles.στοιχείο}>
            <TranslatedText>Συχνές Ερωτήσεις</TranslatedText>
          </Link>
          <SocialIcons />
          <Link href="/home" className={styles.στοιχείο}>
            <TranslatedText>Σχετικά με εμένα</TranslatedText>
          </Link>
        </ul>
      </nav>
      <div className={styles['copyright-container']}>
        <TranslatedText>Δημήτρης Μανωλόπουλος</TranslatedText>
        {` © ${τρέχονΈτος} `}
        <TranslatedText>Επιφύλαξη Παντός Δικαιώματος</TranslatedText>
      </div>
    </footer>
  );
};
export default Υποσέλιδο;

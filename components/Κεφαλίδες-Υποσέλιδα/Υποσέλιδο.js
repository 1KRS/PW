import styles from './Υποσέλιδο.module.css';

import Link from 'next/link';

import SocialIcons from '../SocialIcons';
import TranslatedText from '../TranslatedText';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

const Υποσέλιδο = () => {
  const { τρέχονΈτος } = στοιχείαΗμερομηνιών();

  return (
    <footer className={styles.υποσέλιδο}>
      <div className={styles['περιέκτης-κεντρικού-τμήματος-υποσέλιδου']}>
        <nav className={styles['home-bottom-nav']}>
          <ul className={styles.στοιχεία}>
            <Link href="/home" className={styles.στοιχείο}>
              <TranslatedText>Συχνές Ερωτήσεις</TranslatedText>
            </Link>
            <SocialIcons />
            <Link href="/programming/about-this-site" className={styles.στοιχείο}>
              <TranslatedText>Σχετικά</TranslatedText>
            </Link>
          </ul>
        </nav>
        <div className={styles['copyright-container']}>
          <TranslatedText>Δημήτρης Μανωλόπουλος</TranslatedText>
          {` © ${τρέχονΈτος} `}
          <TranslatedText>Επιφύλαξη Παντός Δικαιώματος</TranslatedText>
        </div>
      </div>
    </footer>
  );
};
export default Υποσέλιδο;

import Link from 'next/link';
import styles from './MainFooter.module.css';

import SocialIcons from '../SocialIcons';
import TranslatedText from '../TranslatedText';

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles['home-bottom-nav']}>
        <ul className={styles.items}>
          <Link href="/home" className={styles.item}>
            <TranslatedText>Συχνές Ερωτήσεις</TranslatedText>
          </Link>
          <SocialIcons />
          <Link href="/home" className={styles.item}>
            <TranslatedText>Σχετικά με εμένα</TranslatedText>
          </Link>
        </ul>
      </nav>

      <p className={styles.copyright}>
        <TranslatedText>
          Δημήτρης Μανωλόπουλος 2024 © Επιφύλαξη Παντός Δικαιώματος
        </TranslatedText>
      </p>
    </footer>
  );
};
export default MainFooter;

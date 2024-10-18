import Link from 'next/link';
import styles from './MainFooter.module.css';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const MainFooter = () => {
  return (
    <footer className={styles.footer}>

      <nav className={styles['home-bottom-nav']}>
        <ul className={styles.items}>
          <Link href="/home" className={styles.item}>Συχνές Ερωτήσεις</Link>
            <SocialIcons />
          <Link href="/home" className={styles.item}>Σχετικά με εμένα</Link>
        </ul>
      </nav>

      <p className={styles.copyright}>
        Επιφύλαξη παντός δικαιώματος | Δημήτρης Μανωλόπουλος © 2024
      </p>
    </footer>
  );
};
export default MainFooter;

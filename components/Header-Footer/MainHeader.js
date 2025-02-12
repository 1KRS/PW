import Link from 'next/link';
import styles from './MainHeader.module.css';
import LanguagesDropdown from '../LanguagesDropdown';
import BackgroundToggle from '../Πλήκτρα/ToggleButtons/BackgroundToggle';
import BackgroundToggle2 from '../Πλήκτρα/ToggleButtons/BackgroundToggle2';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <div>
          Δημήτρης <span>Μανωλόπουλος</span>
        </div>
      </Link>
      <nav className={styles['home-top-nav']}>
        <ul className={styles.items}>
          <LanguagesDropdown />
          {/* <Link href="/" className={styles.item}>Ιστορικό Ανάπτυξης</Link> */}
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;

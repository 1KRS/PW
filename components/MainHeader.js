import Link from 'next/link';
import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <div>Δημήτρης <span>Μανωλόπουλος</span></div>
      </Link>
      <nav className={styles['home-top-nav']}>
        <ul className={styles.items}>
          <Link href="/" className={styles.item}>Τίτλος</Link>
          <Link href="/" className={styles.item}>Τίτλος</Link>
          <Link href="/" className={styles.item}>Τίτλος</Link>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;

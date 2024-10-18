import Link from 'next/link';
import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.logo}>
        <div>Δημήτρης <span>Μανωλόπουλος</span></div>
      </Link>
      <nav className={styles['home-top-nav']}>
        <ul className={styles.items}>
          <Link href="/home" className={styles.item}>Τίτλος</Link>
          <Link href="/home" className={styles.item}>Τίτλος</Link>
          <Link href="/home" className={styles.item}>Τίτλος</Link>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;

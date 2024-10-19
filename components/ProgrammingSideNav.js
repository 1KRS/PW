import Image from 'next/image';
import Link from 'next/link';
import styles from './ProgrammingSideNav.module.css';

const ProgrammingSideNav = () => {
  return (
    <nav className={styles['home-side-nav']}>
      <ul className={styles['home-side-nav__items']}>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming/education">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming/services">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming/testimonials">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />  
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming/contact">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/programming">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default ProgrammingSideNav;

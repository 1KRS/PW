import Image from 'next/image';
import Link from 'next/link';
import styles from './SideNav.module.css';

const SideNav = () => {
  return (
    <nav className={styles['home-side-nav']}>
      <ul className={styles['home-side-nav__items']}>
        <li className={styles['home-side-nav__item']}>
          <Link href="/">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/education">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/services">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/testimonials">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />  
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/contact">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/">
            <Image
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={45}
              height={45}
              alt="Φτερά Ικάρου"
            />
          </Link>
        </li>
        <li className={styles['home-side-nav__item']}>
          <Link href="/contact">
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
export default SideNav;

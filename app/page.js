import MainHeader from '@/components/MainHeader';
import SideNav from '@/components/SideNav';
import SocialIcons from '@/components/SocialIcons';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MainFooter from '@/components/MainFooter';

export default function Home() {
  return (
    <>
      <MainHeader />
      <SideNav />
      <main className={styles.main}>
        <section className={styles.home} id="home">
          <div className={styles['home-content']}>
            <h1>
              Χαίρεται, <span>Δημήτρης</span> εδώ
            </h1>
            <h3 className={styles['text-animation']}>
              Είμαι <span></span>
            </h3>
            <p>
              Ένας νεαρός Πλήρους-Εύρους Προγραμματιστής Ιστού με προσήλωση στην
              εξέλιξη και στόχο την βέλτιστη λύση.
            </p>

           <SocialIcons />

            <div className={styles['btn-group']}>
              <Link href="#" className={styles.btn}>
                Πρόσληψη
              </Link>
              <Link href="/contact" className={styles['btn-sec']}>
                Επικοινωνία
              </Link>
            </div>
          </div>
          <div className={styles['home-img']}>
            <Image
              className={styles.img}
              src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
              width={500}
              height={500}
              alt="Φτερά Ικάρου"
            />
          </div>
        </section>
      </main>
        <MainFooter />
    </>
  );
}

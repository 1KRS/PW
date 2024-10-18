import MainHeader from '@/components/MainHeader';
import SideNav from '@/components/SideNav';
import styles from './page.module.css';
import MainFooter from '@/components/MainFooter';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <MainHeader />
      <SideNav />
      <main className={styles.main}>
        <section className={styles.contact} id="contact">
          <Heading text='Επικοινωνία'/>

          <form action="">
            <div className={styles['input-group']}>
              <div className={styles['input-box']}>
                <input type="text" className={styles.text} placeholder='Πλήρες Όνομα'/>
                <input type="email" className={styles.email} placeholder='Ηλ. Ταχυδρομείο'/>
              </div>
              <div className={styles['input-box']}>
                <input type="number" className={styles['phone-number']} placeholder='Αρ. Τηλεφώνου'/>
                <input type="text" className={styles.text} placeholder='Θέμα'/>
              </div>
            </div>
            <div className={styles['input-group-2']}>
              <textarea name="" id="" cols='30' rows='10' placeholder='Το μήνυμά σας'></textarea>
              <input type="submit" value='Αποστολή Μηνύματος' className={styles.btn} />
            </div>
          </form>
        </section>
      </main>
      <MainFooter />
    </>
  );
}

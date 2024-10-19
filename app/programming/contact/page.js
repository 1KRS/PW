import styles from './page.module.css';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Επικοινωνία" />
        <section className={styles.contact} id="contact">
          <form action="">
            <div className={styles['input-group']}>
              <div className={styles['input-box']}>
                <input
                  type="text"
                  className={styles.text}
                  placeholder="Πλήρες Όνομα"
                />
                <input
                  type="email"
                  className={styles.email}
                  placeholder="Ηλ. Ταχυδρομείο"
                />
              </div>
              <div className={styles['input-box']}>
                <input
                  type="number"
                  className={styles['phone-number']}
                  placeholder="Αρ. Τηλεφώνου"
                />
                <input type="text" className={styles.text} placeholder="Θέμα" />
              </div>
            </div>
            <div className={styles['input-group-2']}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Το μήνυμά σας"
              ></textarea>
              <input
                type="submit"
                value="Αποστολή Μηνύματος"
                className={styles.btn}
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

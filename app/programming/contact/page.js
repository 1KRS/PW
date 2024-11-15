import styles from './page.module.css';
import Heading from '@/components/Heading';

const Contact = () => {
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
              </div>
              <div className={styles['input-box']}>
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
              </div>
              <div className={styles['input-box']}>
                <input type="text" className={styles.text} placeholder="Θέμα" />
              </div>
            </div>
            <div className={styles['input-group-2']}>
              <div className={styles['input-box']}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Γράψτε το μήνυμά σας στα ελληνικά."
                ></textarea>
              </div>
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
};

export default Contact;

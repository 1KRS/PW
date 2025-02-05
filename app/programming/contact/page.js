import styles from './page.module.css';
import Heading from '@/components/Heading';
import Input from '@/components/Inputs/Input';
import Textarea from '@/components/Inputs/Textarea';

export const metadata = {
  title: 'ΔΜ - Επικοινωνία',
  description: 'Σελίδα επικοινωνίας με Δημήτρη Μανωλόπουλο',
  keywords: ['Σελίδα επικοινωνίας', 'Contact page', 'Kontaktsida'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const Contact = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Επικοινωνία" />
        <section className={styles.contact} id="contact">
          <form action="">
            <div className={styles['input-group']}>
              <div className={styles['input-box']}>
                <Input type="text" style="text" placeholder="Πλήρες Όνομα" />
              </div>
              <div className={styles['input-box']}>
                <Input
                  type="email"
                  style="email"
                  placeholder="Ηλ. Ταχυδρομείο"
                />
              </div>
              <div className={styles['input-box']}>
                <Input
                  type="number"
                  style="phone-number"
                  placeholder="Αριθμός Τηλεφώνου"
                />
              </div>
              <div className={styles['input-box']}>
                <Input type="text" style="text" placeholder="Θέμα" />
              </div>
            </div>
            <div className={styles['input-group-2']}>
              <div className={styles['input-box']}>
                <Textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Γράψτε το μήνυμά σας στα ελληνικά."
                />
              </div>
              <Input type="submit" style="btn" value="Αποστολή Μηνύματος" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;

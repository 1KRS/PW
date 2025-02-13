import styles from './page.module.css';
import Heading from '@/components/Heading';
import Φόρμα from '@/components/Επικοινωνία/Form';

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
        <section className={styles['τομέας-επικοινωνίας']} id="τομέας-επικοινωνίας">
          <Φόρμα id='φόρμα-γενικής-επικοινωνίας' />
        </section>
      </main>
    </>
  );
};

export default Contact;

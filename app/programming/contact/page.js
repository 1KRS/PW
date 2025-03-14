import styles from './page.module.css';

import Τίτλος from '@/components/Τίτλος';
import Φόρμα from '@/components/Επικοινωνία/Φόρμα';

export const metadata = {
  title: 'ΔΜ - Επικοινωνία',
  description: 'Σελίδα επικοινωνίας με Δημήτρη Μανωλόπουλο',
  keywords: ['Σελίδα επικοινωνίας', 'Contact page', 'Kontaktsida'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const ΣελίδαΕπικοινωνίας = () => {
  return (
    <main className={styles.main}>
      <Τίτλος text="Επικοινωνία" />

      <section
        className={styles['τομέας-επικοινωνίας']}
        id="τομέας-επικοινωνίας"
      >
        <Φόρμα id="φόρμα-γενικής-επικοινωνίας" />
      </section>
    </main>
  );
};

export default ΣελίδαΕπικοινωνίας;

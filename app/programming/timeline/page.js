import styles from './page.module.css';

import Heading from '@/components/Heading';
import ΣτοιχείαΧρονολογίου from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου';
import ProgrammingTimelineSideNav from '@/components/Navigations/ProgrammingTimelineSideNav';

export const metadata = {
  title: 'ΔΜ - Χρονολόγιο',
  description: 'Η πορεία μου ως προγραμματιστής',
  keywords: ['Χρονολόγιο', 'Timeline', 'Tidlinje'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const Χρονολόγιο = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Χρονολόγιο" />
        <ProgrammingTimelineSideNav
          σελίδα="Χρονολόγιο"
          ύπαρξηΦίλτρων="υπαρκτά"
        />

        <section className={styles['τομέας-χρονολογίου']} id="τομέας-χρονολογίου">
          <div className={styles['περιέκτης-χρονολογίου']}>
            <ΣτοιχείαΧρονολογίου />
          </div>
        </section>
      </main>
    </>
  );
};

export default Χρονολόγιο;

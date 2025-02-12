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

const Timeline = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Χρονολόγιο" />
        <ProgrammingTimelineSideNav
          σελίδα="Χρονολόγιο"
          ύπαρξηΦίλτρων="υπαρκτά"
        />

        <section className={styles.timeline} id="timeline">
          <div className={styles['timeline-container']}>
            <ΣτοιχείαΧρονολογίου />
          </div>
        </section>
      </main>
    </>
  );
};

export default Timeline;

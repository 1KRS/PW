import styles from './page.module.css';

import Heading from '@/components/Heading';
import ΣτοιχείαΧρονολογίου from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου';
import ProgrammingTimelineSideNav from '@/components/Navigations/ProgrammingTimelineSideNav';

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

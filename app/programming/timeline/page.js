import Heading from '@/components/Heading';
import TimelineItems from '@/components/TimelineItems';
import styles from './page.module.css';
import ProgrammingTimelineSideNav from '@/components/Navigations/ProgrammingTimelineSideNav';

const Timeline = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Χρονολόγιο" />
        <ProgrammingTimelineSideNav />
        <section className={styles.timeline} id="timeline">
          <div className={styles['timeline-container']}>
            <TimelineItems />
          </div>
        </section>
      </main>
    </>
  );
};

export default Timeline;

import Heading from '@/components/Heading';
import TimelineItems from '@/components/TimelineItems';
import styles from './page.module.css';

const Timeline = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Σπουδές Προγραμματισμού" />

        <div className={styles.fixed}>
          <section className={styles.timeline} id="timeline">
            <TimelineItems />
          </section>
        </div>
      </main>
    </>
  );
};

export default Timeline;

import Heading from '@/components/Heading';
import TimelineItems from '@/components/TimelineItems';
import styles from './page.module.css';

const Education = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Σπουδές Προγραμματισμού" />

        <section className={styles.education} id="education">
          <div className={styles['education-container']}>
            <TimelineItems />
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;

import Heading from '@/components/Heading';
import TimelineItems from '@/components/TimelineItems';
import styles from './page.module.css';



export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Σπουδές Προγραμματισμού" />

        <div className={styles.fixed}>
          <section className={styles.education} id="education">
            <TimelineItems />
          </section>
        </div>
      </main>
    </>
  );
}

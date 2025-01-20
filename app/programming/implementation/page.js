import styles from './page.module.css';
import TodoItems from '@/components/TodoItems';
import Heading from '@/components/Heading';
import ProgrammingTimelineSideNav from '@/components/Navigations/ProgrammingTimelineSideNav';

const Implementation = () => {
  return (
    <>
    <main className={styles.main}>
      <Heading text="Προς Υλοποίηση" />
      <ProgrammingTimelineSideNav σελίδα='Προς υλοποίηση' ύπαρξηΦίλτρων='ανύπαρκτα'/>
      <section className={styles.todos} id="todos">
        <div className={styles['todos-container']}>
          <TodoItems />
        </div>
      </section>
    </main>
  </>
  );
};

export default Implementation;

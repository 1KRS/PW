import styles from './page.module.css';
import TodoItems from '@/components/TodoItems';
import Heading from '@/components/Heading';

const Implementation = () => {
  return (
    <>
    <main className={styles.main}>
      <Heading text="Προς Υλοποίηση" />

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

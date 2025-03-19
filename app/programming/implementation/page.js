import styles from './page.module.css';
import TodoItems from '@/components/TodoItems';
import Τίτλος from '@/components/Τίτλος';
import ProgrammingTimelineSideNav from '@/components/Navigations/ΠλαϊνήΣτήληΧρονολογίουΠρογραμματισμού';

const Implementation = () => {
  return (
    <>
      <main className={styles.main}>
        <Τίτλος text="Προς Υλοποίηση" />
        <ProgrammingTimelineSideNav
          σελίδα="Προς υλοποίηση"
          ύπαρξηΦίλτρων="ανύπαρκτα"
        />
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

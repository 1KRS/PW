import styles from './page.module.css';
import TodoItems from '@/components/TodoItems';
import Τίτλος from '@/components/Τίτλος';
import ProgrammingTimelineSideNav from '@/components/Navigations/ΠλαϊνήΣτήληΧρονολογίουΠρογραμματισμού';

const ΣελίδαΥλοποίησης = () => {
  return (
    <>
      <main className={styles.main}>
        <Τίτλος text="Προς Υλοποίηση" />
        <ProgrammingTimelineSideNav
          σελίδα="Προς υλοποίηση"
          ύπαρξηΦίλτρων="ανύπαρκτα"
        />
        <section className={styles.εκκρεμότητες} id="τομέας-εκκρεμοτήτων">
          <div className={styles['περιέκτης-εκκρεμοτήτων']}>
            <TodoItems />
          </div>
        </section>
      </main>
    </>
  );
};

export default ΣελίδαΥλοποίησης;

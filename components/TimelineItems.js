import styles from '@/components/TimelineItems.module.css';
import ΠεριεχόμενοΓεγονότος from '@/components/Event/ΠεριεχόμενοΓεγονότος';

import ΤελείαΓεγονότος from '@/components/Event/ΤελείαΓεγονότος';

import { χρονολόγιο } from '@/db/χρονολόγιο';

const TimelineItems = () => {
  return (
    <>
      <div className={styles['timeline-items']}>
        {χρονολόγιο
          .filter((στιγμή) => στιγμή.γεγονός.κατηγορία === 'Προγραμματισμός')
          .map((στιγμή) => {
            return (
              <article key={στιγμή.ταυτότητα} className={styles['timeline-item']}>
                <ΤελείαΓεγονότος />
                <ΠεριεχόμενοΓεγονότος στιγμή={στιγμή} />
              </article>
            );
          })}
      </div>
    </>
  );
};
export default TimelineItems;

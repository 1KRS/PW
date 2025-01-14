import styles from '@/components/TimelineItems.module.css';

import Γεγονός from '@/components/Event/Γεγονός';

import { χρονολόγιο } from '@/db/χρονολόγιο';

const TimelineItems = () => {
  return (
    <>
      <div className={styles['timeline-items']}>
        {χρονολόγιο
          .filter((στιγμή) => στιγμή.γεγονός.κατηγορία === 'Προγραμματισμός')
          .map((στιγμή) => {
            return (
              <Γεγονός key={στιγμή.ταυτότητα} στιγμή={στιγμή} />
            );
          })}
      </div>
    </>
  );
};
export default TimelineItems;


import styles from '@/components/TimelineItems.module.css';

import ΔιάρκειαΓεγονότος from '@/components/Event/ΔιάρκειαΓεγονότος';
import EventMonth from './EventMonth';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

const ΧρονικέςΠληροφορίες = ({ στιγμή }) => {
  const { ταυτότητα, γεγονός } = στιγμή;

  const { έναρξη, λήξη } = γεγονός;

  const μονός = ταυτότητα % 2 !== 0 ? true : false;

  const {
    μήναςΈναρξης,
    χρονολογίαΈναρξης,
    αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών,
    ημέρεςΕβδομάδεςΜήνεςΈτη,
  } = στοιχείαΗμερομηνιών(έναρξη, λήξη);

  const κείμενοΧρονολογίας = μονός ? (
    μήναςΈναρξης ? (
      <>
        <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div>
        <div className={styles['timeline-date-month-odd']}>
          <EventMonth έναρξη={έναρξη} />
        </div>
      </>
    ) : (
      <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div>
    )
  ) : μήναςΈναρξης ? (
    <>
      <div className={styles['timeline-date-month-even']}>
        <EventMonth έναρξη={έναρξη} />
      </div>
      <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div>
    </>
  ) : (
    <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div>
  );

  return (
    <>
      <div className={styles['ημερομηνία-γεγονότος']}>{κείμενοΧρονολογίας}</div>
      <ΔιάρκειαΓεγονότος
        αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών={αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών}
        ημέρεςΕβδομάδεςΜήνεςΈτη={ημέρεςΕβδομάδεςΜήνεςΈτη}
      />
    </>
  );
};

export default ΧρονικέςΠληροφορίες;

import styles from '@/components/TimelineItems.module.css';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

import ΔιάρκειαΓεγονότος from '@/components/Event/ΔιάρκειαΓεγονότος';
import TranslatedText from '../TranslatedText';
import EventMonth from './EventMonth';

const ΧρονικέςΠληροφορίες = ({ μονός, έναρξη, λήξη }) => {

  const {
    τρέχουσαΗμερομηνία,
    τρέχονΈτος,
    τρέχονΜήνας,
    τρέχουσαΗμέρα,
    ημερομηνίαΈναρξης,
    ημερομηνίαΛήξης,
    μήναςΈναρξης,
    μήναςΛήξης,
    χρονολογίαΈναρξης,
    χρονολογίαΛήξης,
    μελλοντικόΉΠαρελθοντικόΓεγονός,
    διάρκειαΓεγονότοςΣεΗμέρες,
    αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών,
    ημέρεςΕβδομάδεςΜήνεςΈτη,
    κείμενοΔιάρκειαςΓεγονότος,
  } = στοιχείαΗμερομηνιών(έναρξη, λήξη);

  const κείμενοΧρονολογίας = μονός ? (
    μήναςΈναρξης ? (
      <>
        <div className={styles['timeline-date-year']}>
          {χρονολογίαΈναρξης}
        </div>
        <div className={styles['timeline-date-month-odd']}>
          <EventMonth έναρξη={έναρξη} />
        </div>
      </>
    ) : (
      <div className={styles['timeline-date-year']}>
        {χρονολογίαΈναρξης}
      </div>
    )
  ) : μήναςΈναρξης ? (
    <>
      <div className={styles['timeline-date-month-even']}>
        <EventMonth έναρξη={έναρξη} />
      </div>
      <div className={styles['timeline-date-year']}>
        {χρονολογίαΈναρξης}
      </div>
    </>
  ) : (
    <div className={styles['timeline-date-year']}>
      {χρονολογίαΈναρξης}
    </div>
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

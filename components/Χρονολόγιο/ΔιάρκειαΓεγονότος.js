import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import Μετάφραση from '@/components/Μετάφραση';
import ΠοσοστόΥλοποίησης from '@/components/Ποσοστά/ΠοσοστόΥλοποίησης';

const ΔιάρκειαΓεγονότος = ({
  στιγμή,
  αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών,
  ημέρεςΕβδομάδεςΜήνεςΈτη,
}) => {
  let ποσοστό = '';

  if (στιγμή.γεγονός.ποσοστό) {
    if (στιγμή.γεγονός.ποσοστό.split('').includes('%')) {
      ποσοστό = στιγμή.γεγονός.ποσοστό;
    } else if (στιγμή.γεγονός.ποσοστό.split(' ').includes('από')) {
      const πρώτοςΠαράγοντας = στιγμή.γεγονός.ποσοστό.split(' ')[0];
      const δεύτεροςΠαράγοντας = στιγμή.γεγονός.ποσοστό.split(' ')[2];
      ποσοστό = `${((πρώτοςΠαράγοντας * 100) / δεύτεροςΠαράγοντας).toFixed(0)}%`;
    }
  }
  return (
    <div className={styles['διάρκεια-γεγονότος']}>
      {`${αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών} `}
      <Μετάφραση>{ημέρεςΕβδομάδεςΜήνεςΈτη}</Μετάφραση>
      {(στιγμή.έργο.τίτλοςΈργου === 'Προσωπικός Ιστότοπος' ||
        στιγμή.γεγονός.ποσοστό) && <pre>{' ('}</pre>}
      {στιγμή.έργο.τίτλοςΈργου === 'Προσωπικός Ιστότοπος' && (
        <ΠοσοστόΥλοποίησης />
      )}
      {στιγμή.γεγονός.ποσοστό && ποσοστό}
      {(στιγμή.έργο.τίτλοςΈργου === 'Προσωπικός Ιστότοπος' ||
        στιγμή.γεγονός.ποσοστό) && <pre>{')'}</pre>}
    </div>
  );
};

export default ΔιάρκειαΓεγονότος;

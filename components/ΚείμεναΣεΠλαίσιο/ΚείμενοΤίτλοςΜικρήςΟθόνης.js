import styles from '@/components/ΚείμεναΣεΠλαίσιο/Κείμενο.module.css';

import Μετάφραση from '@/components/Μετάφραση';

const ΚείμενοΤίτλοςΜικρήςΟθόνης = () => {
  return (
    <div className={styles['περιέκτης-κειμένου']}>
      <p className={styles['κείμενο']}>
        <Μετάφραση>
          Για βέλτιστη εμπειρία, συνιστάται η περιήγηση σε συσκευή με μεγαλύτερη
          οθόνη (iPad ή μεγαλύτερη).
        </Μετάφραση>
      </p>
    </div>
  );
};

export default ΚείμενοΤίτλοςΜικρήςΟθόνης;

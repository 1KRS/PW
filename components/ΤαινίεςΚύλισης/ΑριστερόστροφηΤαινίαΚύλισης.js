import styles from './ΣτοιχείοΤαινίαςΚύλισης.module.css';

import ΣτοιχείοΤαινίαςΚύλισηςΜεΕικονίδιο from '@/components/ΤαινίεςΚύλισης/ΣτοιχείοΤαινίαςΚύλισηςΜεΕικονίδιο';

const ΑριστερόστροφηΤαινίαΚύλισης = ({ στοιχείαΠροςΑνάπτυξη }) => {
  return (
    <div
      className={styles['περιέκτης'] + ' ' + styles['περιέκτης-προς-αριστερά']}
    >
      {στοιχείαΠροςΑνάπτυξη.map((στοιχείο, index) => {
        return (
          <ΣτοιχείοΤαινίαςΚύλισηςΜεΕικονίδιο
            key={index}
            αριθμόςΣτοιχείου={index}
            όνομαΣτοιχείου={στοιχείο}
          />
        );
      })}
    </div>
  );
};
export default ΑριστερόστροφηΤαινίαΚύλισης;

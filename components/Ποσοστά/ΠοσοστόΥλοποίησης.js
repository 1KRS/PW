import styles from './ΠοσοστόΥλοποίησης.module.css';

import { προςΥλοποίηση } from '@/db/προςΥλοποίηση';

const ΠοσοστόΥλοποίησης = () => {
  
  const σύνολοΚρίσιμων = προςΥλοποίηση.filter(
    (todo) => todo.κρίσιμο === true
  ).length;

  const σύνολοΕνΑναμονήΚρίσιμων = προςΥλοποίηση.filter(
    (todo) => todo.κρίσιμο === true && todo.ενΕξελίξει === false
  ).length;

  const σύνολοΕνΕξελίξειΚρίσιμων = προςΥλοποίηση.filter(
    (todo) =>
      todo.κρίσιμο === true &&
      todo.ενΕξελίξει === true &&
      todo.ολοκλήρωση === false
  ).length;

  const σύνολοΟλοκληρωμένωνΚρίσιμων = προςΥλοποίηση.filter(
    (todo) => todo.κρίσιμο === true && todo.ολοκλήρωση === true
  ).length;

  const ποσοστόΥλοποίησηςΚρίσιμων = parseFloat(
    ((σύνολοΟλοκληρωμένωνΚρίσιμων + σύνολοΕνΕξελίξειΚρίσιμων / 2) /
      σύνολοΚρίσιμων) *
      100
  ).toFixed(0);

  return (
    <div className={styles.ποσοστό}>{`${ποσοστόΥλοποίησηςΚρίσιμων}%`}</div>
  );
};

export default ΠοσοστόΥλοποίησης;

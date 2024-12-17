import styles from './UnderDevelopmentRibbon.module.css';
import { προςΥλοποίηση } from '@/db/προςΥλοποίηση'
import TranslatedText from './TranslatedText';
import Link from 'next/link';


const UnderDevelopmentRibbon = () => {
  
  const σύνολοΚρίσιμων = προςΥλοποίηση.filter(todo => todo.κρίσιμο === true).length
  const σύνολοΕνΑναμονήΚρίσιμων = προςΥλοποίηση.filter(todo => todo.κρίσιμο === true && todo.ενΕξελίξει === false ).length
  const σύνολοΕνΕξελίξειΚρίσιμων = προςΥλοποίηση.filter(todo => todo.κρίσιμο === true && todo.ενΕξελίξει === true && todo.ολοκλήρωση === false).length
  const σύνολοΟλοκληρωμένωνΚρίσιμων = προςΥλοποίηση.filter(todo => todo.κρίσιμο === true && todo.ολοκλήρωση === true).length
  const ποσοστόΥλοποίησηςΚρίσιμων =  parseFloat(((σύνολοΟλοκληρωμένωνΚρίσιμων + (σύνολοΕνΕξελίξειΚρίσιμων / 2)) / σύνολοΚρίσιμων) * 100).toFixed(0);

  return (
    <Link href={'/programming/implementation'} className={styles.ribbon}>
      <TranslatedText>Υπό Ανάπτυξη</TranslatedText><div className={styles.παύλες}> -- </div><div className={styles.ποσοστό}>{`${ποσοστόΥλοποίησηςΚρίσιμων}%`}</div>
    </Link>
  );
};

export default UnderDevelopmentRibbon;

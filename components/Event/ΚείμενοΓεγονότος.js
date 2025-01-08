import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';

const ΚείμενοΓεγονότος = ({ στιγμή }) => {

  const { ταυτότητα, κείμενο } = στιγμή;

  const μονόςΑριθμός = ταυτότητα % 2 !== 0 ? true : false;

  return κείμενο !== '' && μονόςΑριθμός ? (
    <p className={styles['γεγονός-μονού-αριθμού'] + ' ' + styles['κείμενο-γεγονότος']}>
      <TranslatedText>{κείμενο}</TranslatedText>
    </p>
  ) : (
    <p className={styles['γεγονός-ζυγού-αριθμού'] + ' ' + styles['κείμενο-γεγονότος']}>
      <TranslatedText>{κείμενο}</TranslatedText>
    </p>
  );
};

export default ΚείμενοΓεγονότος;

import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';

const ΚείμενοΓεγονότος = ({ στιγμή }) => {

  const { ταυτότητα, κείμενο } = στιγμή;

  const μονόςΑριθμός = ταυτότητα % 2 !== 0 ? true : false;

  return κείμενο !== '' && μονόςΑριθμός ? (
    <p className={styles['event-text'] + ' ' + styles['event-text-right']}>
      <TranslatedText>{κείμενο}</TranslatedText>
    </p>
  ) : (
    <p className={styles['event-text'] + ' ' + styles['event-text-left']}>
      <TranslatedText>{κείμενο}</TranslatedText>
    </p>
  );
};

export default ΚείμενοΓεγονότος;

import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';

const ΚείμενοΓεγονότος = ({ μονός, κείμενο }) => {
  return κείμενο !== '' && μονός ? (
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

          {/* <ΚείμενοΓεγονότος μονός={μονός} κείμενο={κείμενο}/> */}


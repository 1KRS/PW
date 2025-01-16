import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';
import TranslatedText from '../TranslatedText';

const ΚείμενοΓεγονότος = ({ στιγμή, γεγονόςΣεΜονόΑριθμό }) => {

  const { κείμενο } = στιγμή;

  return κείμενο !== '' && γεγονόςΣεΜονόΑριθμό ? (
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

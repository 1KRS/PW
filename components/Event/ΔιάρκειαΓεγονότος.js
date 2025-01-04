import styles from '@/components/TimelineItems.module.css';

import TranslatedText from '../TranslatedText';

const ΔιάρκειαΓεγονότος = ({
  αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών,
  ημέρεςΕβδομάδεςΜήνεςΈτη,
}) => {
  return (
    <div className={styles['χρονολόγιο-διάρκεια']}>
      <TranslatedText>{`${αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών} ${ημέρεςΕβδομάδεςΜήνεςΈτη}`}</TranslatedText>
    </div>
  );
};

export default ΔιάρκειαΓεγονότος;

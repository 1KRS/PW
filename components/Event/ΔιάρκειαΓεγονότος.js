import styles from '@/components/TimelineItems.module.css';

import TranslatedText from '../TranslatedText';

const ΔιάρκειαΓεγονότος = ({
  αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών,
  ημέρεςΕβδομάδεςΜήνεςΈτη,
}) => {
  return (
    <div className={styles['διάρκεια-γεγονότος']}>
      {`${αριθμόςΗμερώνΕβδομάδωνΜηνώνΕτών} `}
      <TranslatedText>{ημέρεςΕβδομάδεςΜήνεςΈτη}</TranslatedText>
    </div>
  );
};

export default ΔιάρκειαΓεγονότος;

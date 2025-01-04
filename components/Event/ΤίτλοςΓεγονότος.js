import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';

const ΤίτλοςΓεγονότος = ({ είδος, τμήμαΉΤίτλος, θέση, τίτλοςΈργου  }) => {
  const κείμενοΔεδομένωνH3 =
  είδος === 'Σπουδές'
    ? τμήμαΉΤίτλος
    : είδος === 'Εργασία'
    ? θέση
    : είδος === 'Έργα'
    ? τίτλοςΈργου
    : τμήμαΉΤίτλος || θέση || τίτλοςΈργου;

  return (
    <h3>
      <TranslatedText>{κείμενοΔεδομένωνH3}</TranslatedText>
    </h3>
  );
};

export default ΤίτλοςΓεγονότος;

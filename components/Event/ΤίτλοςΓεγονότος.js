import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';

const ΤίτλοςΓεγονότος = ({ στιγμή }) => {
  const { γεγονός, σπουδές, εργασία, έργο } = στιγμή;

  const { είδος } = γεγονός;

  const { τμήμαΉΤίτλος } = σπουδές;

  const { θέση } = εργασία;
  const { τίτλοςΈργου } = έργο;

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

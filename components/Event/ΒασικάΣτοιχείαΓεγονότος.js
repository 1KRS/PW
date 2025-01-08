import styles from '@/components/TimelineItems.module.css';

const ΒασικάΣτοιχείαΓεγονότος = ({
  στιγμή,
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  children,
}) => {
  const { ταυτότητα } = στιγμή;

  const μονόςΑριθμός = ταυτότητα % 2 !== 0 ? true : false;

  const μονόςΖυγόςΔευτερεύουσαΓραμμή = μονόςΑριθμός ? 'event-odd' : 'event-even';

  return (
    <div
      className={
        styles[`${μονόςΖυγόςΔευτερεύουσαΓραμμή}`] +
        ' ' +
        styles[`${μεΉΧωρίςΔευτερεύουσαΓραμμή}`]
      }
    >
      {children}
    </div>
  );
};

export default ΒασικάΣτοιχείαΓεγονότος;

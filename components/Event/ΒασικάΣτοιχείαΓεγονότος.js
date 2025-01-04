import styles from '@/components/TimelineItems.module.css';

const ΒασικάΣτοιχείαΓεγονότος = ({
  μονός,
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  children,
}) => {

  const μονόςΖυγόςΔευτερεύουσαΓραμμή = μονός
  ? 'event-odd'
  : 'event-even';
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

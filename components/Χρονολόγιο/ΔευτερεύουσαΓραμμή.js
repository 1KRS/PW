import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';
import ΠληροφορίεςΔευτερεύουσαςΓραμμής from '@/components/Χρονολόγιο/ΠληροφορίεςΔευτερεύουσαςΓραμμής';

const ΔευτερεύουσαΓραμμή = ({
  στιγμή,
  γεγονόςΣεΜονόΑριθμό,
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  χρώμαΕίδους,
}) => {
  return (
    μεΉΧωρίςΔευτερεύουσαΓραμμή === 'μεΔευτερεύουσαΓραμμή' && (
      <div className={styles['event-info']}>
        <ΠληροφορίεςΔευτερεύουσαςΓραμμής
          στιγμή={στιγμή}
          γεγονόςΣεΜονόΑριθμό={γεγονόςΣεΜονόΑριθμό}
          χρώμαΕίδους={χρώμαΕίδους}
        />
      </div>
    )
  );
};

export default ΔευτερεύουσαΓραμμή;

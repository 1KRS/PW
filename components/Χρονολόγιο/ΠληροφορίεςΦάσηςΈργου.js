import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';
import TranslatedText from '../Μετάφραση';

const ΠληροφορίεςΦάσηςΈργου = ({ πλήθοςΦάσεωνΈργου, τίτλοςΦάσηςΈργου }) => {
  return (
    <h6 className={styles[`φάση-έργου`]}>
      <div className={styles[`περιέκτης-κειμένου-φάσης-έργου`]}>
        <TranslatedText>{`${πλήθοςΦάσεωνΈργου}η`}</TranslatedText>
        <pre> </pre>
        <TranslatedText>Φάση</TranslatedText>
        <pre>{' - '}</pre>
        <TranslatedText>{`${τίτλοςΦάσηςΈργου}`}</TranslatedText>
      </div>
    </h6>
  );
};

export default ΠληροφορίεςΦάσηςΈργου;

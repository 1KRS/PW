import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΕικονίδιοΠιστοποιητικούΓεγονότος from '@/components/Χρονολόγιο/ΕικονίδιοΠιστοποιητικούΓεγονότος';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΠλαϊνάΕικονίδια = ({
  στιγμή,
  γεγονόςΣεΠεριττόΑριθμό,
  κατάστασηΓεγονότος,
}) => {
  const { γεγονός, σπουδές, έργο } = στιγμή;

  const { είδος } = γεγονός;
  const { ιστότοποςΈργου } = έργο;
  const { φωτογραφίαΕγγράφου } = σπουδές;

  const εμφάνισηΕικονιδίουΠιστοποιητικού = είδος !== 'Σπουδές' ? false : true;
  const εμφάνισηΕικονιδίουΙστοτόπουΈργου = είδος !== 'Έργα' ? false : true;
  const εμφάνισηΠλαϊνώνΕικονιδίων =
    κατάστασηΓεγονότος === 'Παρατημένο' ||
    (!εμφάνισηΕικονιδίουΠιστοποιητικού && !εμφάνισηΕικονιδίουΙστοτόπουΈργου)
      ? false
      : true;

  return !εμφάνισηΠλαϊνώνΕικονιδίων ? null : γεγονόςΣεΠεριττόΑριθμό ? (
    <div
      className={
        styles[`icons-container`] + ' ' + styles['icons-container-right']
      }
    >
      {είδος !== 'Σπουδές' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {είδος !== 'Έργα' ? null : ιστότοποςΈργου ? (
        <a target="_blank" href={ιστότοποςΈργου} rel="noopener noreferrer">
          <TbWorldWww className={styles['icon-active']} />
        </a>
      ) : (
        <TbWorldWww className={styles['icon-inactive']} />
      )}
    </div>
  ) : (
    <div
      className={
        styles[`icons-container`] + ' ' + styles['icons-container-left']
      }
    >
      {είδος !== 'Σπουδές' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {είδος !== 'Έργα' ? null : ιστότοποςΈργου ? (
        <a target="_blank" href={ιστότοποςΈργου} rel="noopener noreferrer">
          <TbWorldWww className={styles['icon-active']} />
        </a>
      ) : (
        <TbWorldWww className={styles['icon-inactive']} />
      )}
    </div>
  );
};

export default ΠλαϊνάΕικονίδια;

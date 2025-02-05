import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΕικονίδιοΠιστοποιητικούΓεγονότος from '@/components/Χρονολόγιο/ΕικονίδιοΠιστοποιητικούΓεγονότος';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΠλαϊνάΕικονίδια = ({
  στιγμή,
  γεγονόςΣεΜονόΑριθμό,
  κατάστασηΓεγονότος,
}) => {
  const { γεγονός, σπουδές, έργο } = στιγμή;

  const { είδος } = γεγονός;
  const { ιστότοποςΈργου } = έργο;
  const { φωτογραφίαΕγγράφου } = σπουδές;

  return γεγονόςΣεΜονόΑριθμό ? (
    <div
      className={
        styles[`icons-container`] + ' ' + styles['icons-container-right']
      }
    >
      {κατάστασηΓεγονότος === 'Παρατημένο' ? null : είδος === 'Εργασία' ||
        είδος === 'Έργα' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {ιστότοποςΈργου ? (
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
      {κατάστασηΓεγονότος === 'Παρατημένο' ? null : είδος === 'Εργασία' ||
        είδος === 'Έργα' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {ιστότοποςΈργου ? (
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

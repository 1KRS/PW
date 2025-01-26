import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΕικονίδιοΠιστοποιητικούΓεγονότος from '@/components/Χρονολόγιο/ΕικονίδιοΠιστοποιητικούΓεγονότος';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΠλαϊνάΕικονίδια = ({
  στιγμή,
  γεγονόςΣεΜονόΑριθμό,
  κατάστασηΓεγονότος,
}) => {
  const { γεγονός, οντότητα, σπουδές } = στιγμή;

  const { είδος } = γεγονός;
  const { ιστότοπος } = οντότητα;
  const { φωτογραφίαΕγγράφου } = σπουδές;

  return γεγονόςΣεΜονόΑριθμό ? (
    <div
      className={
        styles[`icons-container`] + ' ' + styles['icons-container-right']
      }
    >
      {κατάστασηΓεγονότος === 'Παρατημένο' ? null : είδος ===
        'Εργασία' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {ιστότοπος ? (
        <a target="_blank" href={ιστότοπος} rel="noopener noreferrer">
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
      {κατάστασηΓεγονότος === 'Παρατημένο' ? null : είδος === 'Εργασία' ? null : φωτογραφίαΕγγράφου ? (
        <ΕικονίδιοΠιστοποιητικούΓεγονότος
          φωτογραφίαΕγγράφου={φωτογραφίαΕγγράφου}
        />
      ) : (
        <TbCertificate className={styles['icon-inactive']} />
      )}
      {ιστότοπος ? (
        <a target="_blank" href={ιστότοπος} rel="noopener noreferrer">
          <TbWorldWww className={styles['icon-active']} />
        </a>
      ) : (
        <TbWorldWww className={styles['icon-inactive']} />
      )}
    </div>
  );
};

export default ΠλαϊνάΕικονίδια;

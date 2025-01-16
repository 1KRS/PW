import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΕικονίδιοΠιστοποιητικούΓεγονότος from '@/components/Χρονολόγιο/ΕικονίδιοΠιστοποιητικούΓεγονότος';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΠλαϊνάΕικονίδια = ({ στιγμή, γεγονόςΣεΜονόΑριθμό }) => {
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
      {είδος === 'Εργασία' ? null : φωτογραφίαΕγγράφου ? (
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
      {είδος === 'Εργασία' ? null : φωτογραφίαΕγγράφου ? (
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

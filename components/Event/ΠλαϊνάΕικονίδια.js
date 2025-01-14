import styles from '@/components/TimelineItems.module.css';

import ΕικονίδιοΠιστοποιητικούΓεγονότος from '@/components/Event/ΕικονίδιοΠιστοποιητικούΓεγονότος';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΠλαϊνάΕικονίδια = ({ στιγμή }) => {
  const { ταυτότητα, γεγονός, οντότητα, σπουδές } = στιγμή;

  const { είδος } = γεγονός;
  const { ιστότοπος } = οντότητα;
  const { φωτογραφίαΕγγράφου } = σπουδές;

  const μονόςΑριθμός = ταυτότητα % 2 !== 0 ? true : false;

  return μονόςΑριθμός ? (
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

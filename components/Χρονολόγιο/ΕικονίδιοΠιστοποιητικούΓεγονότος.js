'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import { useAppContext } from '@/context/AppContext';

import { TbCertificate, TbWorldWww } from 'react-icons/tb';

const ΕικονίδιοΠιστοποιητικούΓεγονότος = ({ φωτογραφίαΕγγράφου }) => {
  const { toggleCertificateModal } = useAppContext();

  const handleCertificateClick = (e, φωτογραφίαΕγγράφου) => {
    e.preventDefault();

    toggleCertificateModal(φωτογραφίαΕγγράφου);
  };

  return (
    <div onClick={(e) => handleCertificateClick(e, φωτογραφίαΕγγράφου)}>
      <TbCertificate className={styles['icon-active']} />
    </div>
  );
};

export default ΕικονίδιοΠιστοποιητικούΓεγονότος;

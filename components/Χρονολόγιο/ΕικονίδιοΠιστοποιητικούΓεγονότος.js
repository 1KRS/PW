'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import { useAppContext } from '@/context/AppContext';

import { TbCertificate } from 'react-icons/tb';

const EventCertificateIcon = ({ φωτογραφίαΕγγράφου }) => {
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

export default EventCertificateIcon;

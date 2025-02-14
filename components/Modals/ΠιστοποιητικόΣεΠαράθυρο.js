'use client';

import styles from './ΠιστοποιητικόΣεΠαράθυρο.module.css';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

import { IoClose } from 'react-icons/io5';

const CertificateInWindow = () => {
  const { certificate, language, toggleCertificateModal } = useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      certificate && dialog.current.showModal();
    }
  }, [certificate]);

  const handleCloseModal = () => {
    toggleCertificateModal();
    dialog.current.close();
  };

  return (
    <dialog
      ref={dialog}
      className={styles['παράθυρο-πιστοποιητικού']}
      onClick={() => handleCloseModal()}
    >
      {/* 👇🏼 Στα ξαφνικά δημιουργούσε θέμα η πιθανή έλλειψη 'src' στην εικόνα οπότε το έβαλα μέσα σε όρο */}
      {certificate && (
        <img
          className={styles.img}
          src={certificate}
          alt={certificate && μετάφραση('Πιστοποιητικό', language)}
        />
      )}
      <form method="dialog">
        <button
          className={styles.πλήκτρο}
          onClick={() => handleCloseModal()}
          autoFocus
        >
          <IoClose />
        </button>
      </form>
    </dialog>
  );
};

export default CertificateInWindow;

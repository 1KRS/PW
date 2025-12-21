'use client';

/* eslint-disable react-hooks/rules-of-hooks */

import styles from './ΠιστοποιητικόΣεΠαράθυρο.module.css';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

import { IoClose } from 'react-icons/io5';

const ΠιστοποιητικόΣεΠαράθυρο = () => {
  const { πιστοποιητικό, γλώσσα, εναλλαγήΠαραθύρουΠιστοποιητικών } =
    useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      πιστοποιητικό && dialog.current.showModal();
    }
  }, [πιστοποιητικό]);

  const handleCloseModal = () => {
    εναλλαγήΠαραθύρουΠιστοποιητικών();
    dialog.current.close();
  };

  return (
    <dialog
      ref={dialog}
      className={styles['παράθυρο-πιστοποιητικού']}
      onClick={() => handleCloseModal()}
    >
      {/* 👇🏼 Στα ξαφνικά δημιουργούσε θέμα η πιθανή έλλειψη 'src' στην εικόνα οπότε το έβαλα μέσα σε όρο */}
      {πιστοποιητικό && (
        <img
          className={styles.img}
          src={πιστοποιητικό}
          alt={πιστοποιητικό && μετάφραση('Πιστοποιητικό', γλώσσα)}
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

export default ΠιστοποιητικόΣεΠαράθυρο;

'use client';

import styles from './ΚείμενοΜικρήςΟθόνηςΣεΠαράθυρο.module.css';

import ΚείμενοΜικρήςΟθόνης from '@/components/Κείμενα/ΚείμενοΜικρήςΟθόνης';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { IoClose } from 'react-icons/io5';

const SmallScreenTextInWindow = () => {
  const { κείμενοΜικρήςΟθόνης, toggleSmallScreenTextModal } = useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      κείμενοΜικρήςΟθόνης && dialog.current.showModal();
    }
  }, [κείμενοΜικρήςΟθόνης]);

  const handleCloseModal = () => {
    toggleSmallScreenTextModal();
    dialog.current.close();
  };

  return (
    <dialog
      ref={dialog}
      className={styles['παράθυρο-κειμένου']}
      onClick={() => handleCloseModal()}
    >
      <ΚείμενοΜικρήςΟθόνης />
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

export default SmallScreenTextInWindow;

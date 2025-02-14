'use client';

import styles from './ΑναδυόμενοΠαράθυροΡυθμίσεων.module.css';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

import { IoClose } from 'react-icons/io5';
import BackgroundToggle2 from '@/components/Πλήκτρα/ToggleButtons/BackgroundToggle2';

const Settings = () => {
  const { settings, toggleSettingsModal } = useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      settings ? dialog.current.showModal() : dialog.current.close();
    }
  }, [settings]);

  return (
    <dialog
      ref={dialog}
      className={styles['παράθυρο-ρυθμίσεων']}
    >
      <BackgroundToggle2 />
      <form method="dialog">
        <button
          className={styles['πλήκτρο-εξόδου']}
          onClick={() => toggleSettingsModal()}
          autoFocus
        >
          <IoClose />
        </button>
      </form>
    </dialog>
  );
};

export default Settings;

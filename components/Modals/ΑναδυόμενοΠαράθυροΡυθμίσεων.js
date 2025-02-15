'use client';

import styles from './ΑναδυόμενοΠαράθυροΡυθμίσεων.module.css';

import ΔιακόπτηςΕναλλαγήςΥποβάθρου from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΕναλλαγήςΥποβάθρου';
import TranslatedText from '../TranslatedText';
import LanguagesContainer from '../LanguagesContainer';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

import { IoClose } from 'react-icons/io5';

const Settings = () => {
  const { settings, toggleSettingsModal } = useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      settings ? dialog.current.showModal() : dialog.current.close();
    }
  }, [settings]);

  return (
    <dialog ref={dialog} className={styles['παράθυρο-ρυθμίσεων']}>
      <h6 className={styles['τίτλος-παραθύρου']}>
        <TranslatedText>Ρυθμίσεις</TranslatedText>
      </h6>
      <form method="dialog">
        <button
          className={styles['πλήκτρο-εξόδου']}
          onClick={() => toggleSettingsModal()}
          autoFocus
        >
          <IoClose />
        </button>
      </form>
      <div className={styles['διακόπτες-ρυθμίσεων']}>
        <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Γλώσσα:</TranslatedText>
          </h6>
          <LanguagesContainer μέγεθος="μεσαίο" />
        </div>
        <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Δυναμικό υπόβαθρο:</TranslatedText>
          </h6>
          <ΔιακόπτηςΕναλλαγήςΥποβάθρου />
        </div>
      </div>
    </dialog>
  );
};

export default Settings;

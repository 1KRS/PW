'use client';

import styles from './ΑναδυόμενοΠαράθυροΡυθμίσεων.module.css';

import ΔιακόπτηςΕναλλαγήςΥποβάθρου from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΕναλλαγήςΥποβάθρου';
import ΔιακόπτηςΥαλομορφισμού from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΥαλομορφισμού';
import ΔιακόπτηςΕναλλαγήςΑδιαφάνειας from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΕναλλαγήςΑδιαφάνειας';
import ΔιακόπτηςΕναλλαγήςΦέγγουςΟρίων from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΕναλλαγήςΦέγγουςΟρίων';
import ΔιακόπτηςΕναλλαγήςΦέγγουςΣτοιχείων from '@/components/Πλήκτρα/ToggleButtons/ΔιακόπτηςΕναλλαγήςΦέγγουςΣτοιχείων';
import TranslatedText from '../TranslatedText';
import LanguagesContainer from '../LanguagesContainer';
// import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';

import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

import { IoClose } from 'react-icons/io5';

const Settings = () => {
  const {
    settings,
    toggleSettingsModal,
    μορφήΣτοιχείων,
    φέγγοςΟρίων,
    φέγγοςΣτοιχείων,
  } = useAppContext();

  const dialog = useRef();

  useEffect(() => {
    {
      settings ? dialog.current.showModal() : dialog.current.close();
    }
  }, [settings]);

  return (
    <dialog
      ref={dialog}
      className={
        styles['παράθυρο-ρυθμίσεων'] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[`${φέγγοςΟρίων === true ? 'με-φέγγος-ορίων' : ''}`] +
        ' ' +
        styles[`${φέγγοςΣτοιχείων === true ? 'με-φέγγος-στοιχείων' : ''}`]
      }
    >
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
        {/* <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Υαλομορφισμός:</TranslatedText>
          </h6>
          <ΔιακόπτηςΥαλομορφισμού />
        </div> */}
        <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Αδιαφάνεια:</TranslatedText>
          </h6>
          <ΔιακόπτηςΕναλλαγήςΑδιαφάνειας />
        </div>
        <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Φέγγος ορίων:</TranslatedText>
          </h6>
          <ΔιακόπτηςΕναλλαγήςΦέγγουςΟρίων />
        </div>
        <div className={styles['γραμμή-διακόπτη']}>
          <h6 className={styles['τίτλος-διακόπτη']}>
            <TranslatedText>Φέγγος στοιχείων:</TranslatedText>
          </h6>
          <ΔιακόπτηςΕναλλαγήςΦέγγουςΣτοιχείων />
        </div>
      </div>
    </dialog>
  );
};

export default Settings;

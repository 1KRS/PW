"use client";

/* eslint-disable react-hooks/rules-of-hooks */

// !! Αυτό μπήκε για μελλοντική χρήση φιλτραρίσματος των μαρτυριών όπως εφαρμόζεται ήδη στην σελίδα του χρονολογίου.

import styles from './ΣτοιχείαΜαρτυριών.module.css';

import ΦίλτραΜαρτυριών from '@/components/Μαρτυρίες/ΦίλτραΜαρτυριών';

import { useAppContext } from '@/context/AppContext';

const ΣτοιχείαΜαρτυριών = () => {
    const { μορφήΣτοιχείων } = useAppContext();

  return (
    <div
      className={
        styles['στοιχεία-μαρτυριών'] +
        ' ' +
        styles[`${μορφήΣτοιχείων === 'υαλομορφισμός' ? '' : 'με-θολό-κάλυμμα'}`]
      }
    >
      <ΦίλτραΜαρτυριών />
    </div>
  );
};

export default ΣτοιχείαΜαρτυριών;

// components/MessagingDropdown.js
'use client';

import styles from '@/components/Κατάλογοι/ΚατάλογοςΕφαρμογώνΕπικοινωνίας.module.css';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiImessage, SiViber } from 'react-icons/si';

const εικονίδια = [
  {
    κλειδί: 'imessage',
    ετικέτα: 'iMessage',
    εικονίδιο: <SiImessage color="#25D366" size={19} />,
  },
  {
    κλειδί: 'whatsapp',
    ετικέτα: 'WhatsApp',
    εικονίδιο: <FaWhatsapp color="#25D366" size={21} />,
  },
  {
    κλειδί: 'viber',
    ετικέτα: 'Viber',
    εικονίδιο: <SiViber color="#665CAC" size={20} />,
  },
];

export default function MessagingDropdown({ χειρισμόςΕπιλογής }) {
  const [επέκτασηΚαταλόγου, setΕπέκτασηΚαταλόγου] = useState(false);
  const [επιλεγμένηΕφαρμογή, setΕπιλεγμένηΕφαρμογή] = useState(εικονίδια[0]);

  const χειρισμόςΕπιλογήςΕικονιδίου = (επιλογή) => {
    setΕπιλεγμένηΕφαρμογή(επιλογή);
    setΕπέκτασηΚαταλόγου(false);
    if (χειρισμόςΕπιλογής) χειρισμόςΕπιλογής(επιλογή.ετικέτα);
  };

  return (
    <div className={styles['περιέκτης-καταλόγου']}>
      <button
        className={styles['περιέκτης-κυρίως-πλήκτρου']}
        onClick={() => setΕπέκτασηΚαταλόγου((v) => !v)}
      >
        <div className={styles['εικονίδιο-κυρίως-πλήκτρου']}>
          {επιλεγμένηΕφαρμογή.εικονίδιο}
        </div>
        <span className={styles['ετικέτα-κυρίως-πλήκτρου']}>
          {επιλεγμένηΕφαρμογή.ετικέτα}
        </span>
        <span
          className={styles['βελάκι-κυρίως-πλήκτρου']}
          style={{ marginLeft: 'auto' }}
        >
          ▼
        </span>
      </button>
      {επέκτασηΚαταλόγου && (
        <ul className={styles['περιέκτης-στοιχείων-καταλόγου']}>
          {εικονίδια.map((εικονίδιοΣεΔείκτη) => (
            <li
              key={εικονίδιοΣεΔείκτη.κλειδί}
              className={styles['στοιχείο-καταλόγου']}
              onClick={() => χειρισμόςΕπιλογήςΕικονιδίου(εικονίδιοΣεΔείκτη)}
            >
              <div className={styles['εικονίδιο-στοιχείου']}>
                {εικονίδιοΣεΔείκτη.εικονίδιο}
              </div>
              <span className={styles['ετικέτα-στοιχείου']}>
                {εικονίδιοΣεΔείκτη.ετικέτα}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

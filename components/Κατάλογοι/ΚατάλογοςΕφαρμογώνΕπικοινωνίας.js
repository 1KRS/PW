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
    εικονίδιο: <SiImessage color="#25D366" size={24} />,
  },
  {
    κλειδί: 'whatsapp',
    ετικέτα: 'WhatsApp',
    εικονίδιο: <FaWhatsapp color="#25D366" size={24} />,
  },
  {
    κλειδί: 'viber',
    ετικέτα: 'Viber',
    εικονίδιο: <SiViber color="#665CAC" size={24} />,
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
        {επιλεγμένηΕφαρμογή.εικονίδιο}
        <span>{επιλεγμένηΕφαρμογή.ετικέτα}</span>
        <span  className={styles['βελάκι-κυρίως-πλήκτρου']} style={{ marginLeft: 'auto' }}>▼</span>
      </button>
      {επέκτασηΚαταλόγου && (
        <ul className={styles['περιέκτης-στοιχείων-καταλόγου']}>
          {εικονίδια.map((εικονίδιοΣεΔείκτη) => (
            <li
              key={εικονίδιοΣεΔείκτη.κλειδί}
              className={styles['στοιχείο-καταλόγου']}
              onClick={() => χειρισμόςΕπιλογήςΕικονιδίου(εικονίδιοΣεΔείκτη)}
            >
              {εικονίδιοΣεΔείκτη.εικονίδιο}
              <span>{εικονίδιοΣεΔείκτη.ετικέτα}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

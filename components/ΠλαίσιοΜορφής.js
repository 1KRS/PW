'use client';

import styles from './ΠλαίσιοΜορφής.module.css';

import { useAppContext } from '@/context/AppContext';

const LooksContainer = ({
  καθορισμόςΔιαστάσεων,
  ακτίναΓωνίας,
  πάχοςΟρίου,
  ενεργόςΔιακόπτηςΦέγγουςΟρίων,
  ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων,
  children,
}) => {
  const { μορφήΣτοιχείων, φέγγοςΟρίων, φέγγοςΣτοιχείων } = useAppContext();

  const ακτίνα =
    ακτίναΓωνίας === 15
      ? 'ακτίνα-γωνίας-15'
      : ακτίναΓωνίας === 25
        ? 'ακτίνα-γωνίας-25'
        : ακτίναΓωνίας === 35
          ? 'ακτίνα-γωνίας-35'
          : '';

  const πάχος =
    πάχοςΟρίου === 0
      ? 'πάχος-ορίου-0'
      : πάχοςΟρίου === 1
        ? 'πάχος-ορίου-1'
        : πάχοςΟρίου === 2
          ? 'πάχος-ορίου-2'
          : πάχοςΟρίου === 3
            ? 'πάχος-ορίου-3'
            : '';

  return (
    <div
      className={
        styles['πλαίσιο-μορφής'] +
        ' ' +
        styles[
          `${καθορισμόςΔιαστάσεων === 'από έξω' ? 'διαστάσεις-από-έξω' : 'διαστάσεις-από-μέσα'}`
        ] +
        ' ' +
        styles[`${ακτίνα}`] +
        ' ' +
        styles[`${πάχος}`] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[
          `${φέγγοςΟρίων === true ? (ενεργόςΔιακόπτηςΦέγγουςΟρίων ? 'με-φέγγος-ορίων' : '') : ''}`
        ] +
        ' ' +
        styles[
          `${φέγγοςΣτοιχείων === true ? (ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων ? 'με-φέγγος-στοιχείων' : '') : ''}`
        ]
      }
    >
      {children}
    </div>
  );
};

export default LooksContainer;

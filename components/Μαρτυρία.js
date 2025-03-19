'use client';

import styles from './Μαρτυρία.module.css';

import Image from 'next/image';

import { useAppContext } from '@/context/AppContext';

import { FaStar } from 'react-icons/fa';
import TranslatedText from './TranslatedText';

const Testimonial = ({
  όνομα,
  βαθμολογία,
  κείμενο,
  διεύθυνσηΕικόνας,
  κείμενοΕικόνας,
  αυθεντικότητα,
}) => {
  const { μορφήΣτοιχείων, φέγγοςΟρίων, φέγγοςΣτοιχείων } = useAppContext();

  const αριθμόςΑστεριών =
    βαθμολογία === 1 ? (
      <FaStar />
    ) : βαθμολογία === 2 ? (
      <>
        <FaStar />
        <FaStar />
      </>
    ) : βαθμολογία === 3 ? (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ) : βαθμολογία === 4 ? (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ) : (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    );

  return (
    <div
      className={
        styles['μαρτυρία'] +
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
      {αυθεντικότητα === 'Ψεύτικη' && (
        <p className={styles['υπόδειξη-αυθεντικότητας-μαρτυρίας']}>
          <TranslatedText>Παράδειγμα</TranslatedText>
        </p>
      )}
      <div
        className={
          styles['επάνω-γραμμή'] +
          ' ' +
          styles[`${αυθεντικότητα === 'Ψεύτικη' ? 'ψεύτικη' : 'αληθινή'}`]
        }
      >
        <Image
          className={styles['εικόνα']}
          src={διεύθυνσηΕικόνας}
          height={300}
          width={300}
          alt={κείμενοΕικόνας}
        />
        <div className={styles['όνομα-και-βαθμολογία']}>
          <h2 className={styles['όνομα']}>{όνομα}</h2>
          <div className={styles['βαθμολογία']}>{αριθμόςΑστεριών}</div>
        </div>
      </div>
      {/* <div className={styles['βαθμολογία-μεγάλη']}>{αριθμόςΑστεριών}</div> */}
      <p className={styles['κείμενο']}>{κείμενο}</p>
    </div>
  );
};

export default Testimonial;

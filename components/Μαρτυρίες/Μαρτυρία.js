"use client";

/* eslint-disable react-hooks/rules-of-hooks */

import styles from './Μαρτυρία.module.css';

import Image from 'next/image';
import Μετάφραση from '@/components/Μετάφραση';

import { useAppContext } from '@/context/AppContext';

import { FaStar } from 'react-icons/fa';

const Μαρτυρία = ({
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
          `${αυθεντικότητα === 'Ψεύτικη' ? 'ψεύτικη-μαρτυρία' : 'αληθινή-μαρτυρία'}`
        ] +
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
        <p className={styles['υπόδειξη-αυθεντικότητας-μαρτυρίας-επάνω']}>
          <Μετάφραση>Παράδειγμα</Μετάφραση>
        </p>
      )}
      <div className={styles['επάνω-γραμμή']}>
        <Image
          className={styles['εικόνα']}
          src={διεύθυνσηΕικόνας}
          height={300}
          width={300}
          alt={κείμενοΕικόνας}
        />
        {αυθεντικότητα === 'Ψεύτικη' && (
          <p className={styles['υπόδειξη-αυθεντικότητας-μαρτυρίας-μέση']}>
            <Μετάφραση>Παράδειγμα</Μετάφραση>
          </p>
        )}
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

export default Μαρτυρία;

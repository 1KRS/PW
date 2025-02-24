import styles from './μαρτυρία.module.css';

import Image from 'next/image';

import { FaStar } from 'react-icons/fa';

const Μαρτυρία = ({
  id,
  όνομα,
  βαθμολογία,
  κείμενο,
  διεύθυνσηΕικόνας,
  κείμενοΕικόνας,
}) => {
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
    <div className={styles['μαρτυρία']}>
      <Image
        className={styles['εικόνα']}
        src={διεύθυνσηΕικόνας}
        height={300}
        width={300}
        alt={κείμενοΕικόνας}
      />
      <h2 className={styles['όνομα']}>{όνομα}</h2>
      <div className={styles['βαθμολογία']}>{αριθμόςΑστεριών}</div>
      <p className={styles['κείμενο']}>{κείμενο}</p>
    </div>
  );
};

export default Μαρτυρία;

import BinaryRain from '@/components/Backgrounds/BinaryRain';
import styles from './not-found.module.css';
import Link from 'next/link';

const notFound = () => {
  return (
    <div className="not-found">
      <BinaryRain rainColor="#ffbb00" />
      <div className={styles.container}>
        <h1>404</h1>
        <div className={styles.text}>
          <h2>Η σελίδα δεν βρέθηκε</h2>
          {/* <p>Παρακαλούμε επιστρέψτε στην αρχική σελίδα.</p> */}

            <Link href="/programming" className={styles.btn}>
              Επιστροφή στην αρχική σελίδα
            </Link>

        </div>
      </div>
    </div>
  );
};

export default notFound;

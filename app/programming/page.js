// 'use client';

import styles from './page.module.css';

import Ηρώο from '@/components/Ηρώο';

// import { useAppContext } from '@/context/AppContext'; //<-------------- Στο τέλος να ελέγξω αν χρειάζεται

const Αρχική = () => {
  // const { language, υπόβαθροΠρογραμματισμού } = useAppContext();

  return (
    <main>
      <section
        className={
          styles.αρχική
          //   styles[
          //     `${υπόβαθροΠρογραμματισμού === 'δυναμικό' ? 'αρχική' : 'αρχική'}`
          //   ]
        }
        id="αρχική"
      >
        <Ηρώο />
      </section>
    </main>
  );
};

export default Αρχική;

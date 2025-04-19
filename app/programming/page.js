// 'use client';

import styles from './page.module.css';

import Ηρώο from '@/components/Ηρώο';
import ΚείμενοΤίτλοςΜικρήςΟθόνης from '@/components/ΚείμεναΣεΠλαίσιο/ΚείμενοΤίτλοςΜικρήςΟθόνης';
import ΠλήκτροΚειμένουΜικρήςΟθόνης from '@/components/Πλήκτρα/ΠλήκτροΚειμένουΜικρήςΟθόνης';

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
      <ΚείμενοΤίτλοςΜικρήςΟθόνης />
      <ΠλήκτροΚειμένουΜικρήςΟθόνης />
    </main>
  );
};

export default Αρχική;

// 'use client';

import styles from './page.module.css';

import Ηρώο from '@/components/Ηρώο';
import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';
import ΚείμενοΤίτλοςΜικρήςΟθόνης from '@/components/Κείμενα/ΚείμενοΤίτλοςΜικρήςΟθόνης';
import SmallScreenTextButton from '@/components/Πλήκτρα/SmallScreenTextButton';

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
      <ΠλαίσιοΜορφής
        καθορισμόςΔιαστάσεων="από μέσα"
        ακτίναΓωνίας={15}
        πάχοςΟρίου={1}
        ενεργόςΔιακόπτηςΦέγγουςΟρίων
        ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων
      >
        <ΚείμενοΤίτλοςΜικρήςΟθόνης />
      </ΠλαίσιοΜορφής>
      <SmallScreenTextButton />
    </main>
  );
};

export default Αρχική;

'use client';

import styles from './Ηρώο.module.css';

import Image from 'next/image';
import Link from 'next/link';
import ΔεξιόστροφηΤαινίαΚύλισης from '@/components/ΤαινίεςΚύλισης/ΔεξιόστροφηΤαινίαΚύλισης';
import ΑριστερόστροφηΤαινίαΚύλισης from '@/components/ΤαινίεςΚύλισης/ΑριστερόστροφηΤαινίαΚύλισης';
import TranslatedText from '@/components/TranslatedText';
import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';

import { useAppContext } from '@/context/AppContext';

import {
  γλώσσες,
  βιβλιοθήκες,
  πλαίσια,
  περιβάλλοντα,
  διαχειριστέςΠακέτων,
  προγράμματα,
  συστήματα,
  πλατφόρμες,
  πακέτα,
} from '../db/τεχνολογίες';

const Hero = () => {
  const { language, υπόβαθροΠρογραμματισμού } = useAppContext();

  const σύνολοΤεχνολογιών = γλώσσες.concat(
    βιβλιοθήκες,
    πλαίσια,
    περιβάλλοντα,
    διαχειριστέςΠακέτων,
    προγράμματα,
    συστήματα,
    πλατφόρμες
  );

  console.log('τεχνολογίες', σύνολοΤεχνολογιών);

  return (
    <section
      className={
        styles[
          `${υπόβαθροΠρογραμματισμού === 'δυναμικό' ? 'αρχική' : 'αρχική'}` //<-------------- Στο τέλος να ελέγξω αν χρειάζεται
        ]
      }
      id="αρχική"
    >
      <ΠλαίσιοΜορφής
        καθορισμόςΔιαστάσεων="από μέσα"
        ακτίναΓωνίας={35}
        πάχοςΟρίου={2}
        ενεργόςΔιακόπτηςΦέγγουςΟρίων={true}
        ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων={true}
      >
        <div className={styles['περιεχόμενο-αρχικής']}>
          {language === 'english' ? (
            <h1>
              Hi, it&apos;s<pre> </pre>
              <span> Dimitris</span>
            </h1>
          ) : language === 'svenska' ? (
            <h1>
              Hej, jag heter<pre> </pre>
              <span>Dimitris</span>
            </h1>
          ) : (
            <h1>
              Χαίρεται,<pre> </pre>
              <span>Δημήτρης</span>
              <pre> </pre>εδώ
            </h1>
          )}

          <h3>
            <TranslatedText>
              Είμαι ένας νεαρός Πλήρους-Εύρους Προγραμματιστής Ιστού με
              προσήλωση στην εξέλιξη και στόχο την βέλτιστη λύση.
            </TranslatedText>
          </h3>

          <div className={styles['περιέκτης-ταινιών-κύλισης']}>
            <ΑριστερόστροφηΤαινίαΚύλισης
              στοιχείαΠροςΑνάπτυξη={σύνολοΤεχνολογιών}
            />
            <ΔεξιόστροφηΤαινίαΚύλισης στοιχείαΠροςΑνάπτυξη={πακέτα} />
          </div>

          <div className={styles['περιέκτης-πλήκτρων']}>
            <Link href="#" className={styles['βασικό-πλήκτρο']}>
              <TranslatedText>Πρόσληψη</TranslatedText>
            </Link>
            <Link
              href="/programming/contact"
              className={styles['δευτερεύον-πλήκτρο']}
            >
              <TranslatedText>Επικοινωνία</TranslatedText>
            </Link>
          </div>
        </div>
      </ΠλαίσιοΜορφής>
      <div className={styles['εικόνα-αρχικής']}>
        <Image
          className={styles.εικόνα}
          src={'/images/Φτερά.png'}
          height={400}
          width={400}
          alt="Φτερά Ικάρου"
        />
      </div>
    </section>
  );
};

export default Hero;

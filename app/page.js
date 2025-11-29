import styles from './page.module.css';

import Link from 'next/link';

import ΣελίδαΥποδοχής from '@/components/Backgrounds/LandingMain';
import ΣήμαΥπόΚατασκευή from '@/components/ΣήμαΥπόΚατασκευή';
import LanguagesContainer from '@/components/LanguagesContainer';
import Μετάφραση from '@/components/Μετάφραση';

import { SpeedInsights } from '@vercel/speed-insights/next';
const Home = () => {
  return (
    <ΣελίδαΥποδοχής>
      <ΣήμαΥπόΚατασκευή />
      <div className={styles['name']}>Δημήτρης Μανωλόπουλος</div>
      <p className={styles['κείμενο']}>
        <Μετάφραση>
          Κατανοώ ότι θέλεις να μάθεις περισσότερα για εμένα (Και γιατί όχι;
          Είμαι πολύ ενδιαφέρον άτομο. 😏) αλλά η ανάπτυξη αυτού του μέρους
          είναι ακόμη σε βασικό επίπεδο. Προς το παρόν μπορείς να απολαύσεις την
          πορεία μου στην ανάπτυξη ιστού και σύντομα θα έρθουν κι άλλα.
        </Μετάφραση>
      </p>
      <Link href="/programming" className={styles['landing__action']}>
        <button type="button" className={styles['landing__action-button']}>
          npm start
        </button>
      </Link>
      <LanguagesContainer />
      <SpeedInsights />
    </ΣελίδαΥποδοχής>
  );
};

export default Home;

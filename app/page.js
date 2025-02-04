import styles from './page.module.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LandingMain from '@/components/Backgrounds/LandingMain';
import Link from 'next/link';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';
import TranslatedText from '@/components/TranslatedText';
import LanguagesContainer from '@/components/LanguagesContainer';

const Home = () => {
  return (
    <LandingMain>
      <UnderConstructionRibbon />
      <div className={styles['name']}>Δημήτρης Μανωλόπουλος</div>
      <p className={styles['κείμενο']}>
        <TranslatedText>
          Κατανοώ ότι θέλεις να μάθεις περισσότερα για εμένα (Και γιατί όχι;
          Είμαι πολύ ενδιαφέρον άτομο. 😏) αλλά η ανάπτυξη αυτού του μέρους
          είναι ακόμη σε βασικό επίπεδο. Προς το παρόν μπορείς να απολαύσεις την
          πορεία μου στην ανάπτυξη ιστού και σύντομα θα έρθουν κι άλλα.
        </TranslatedText>
      </p>
      <Link href="/programming" className={styles['landing__action']}>
        <button type="button" className={styles['landing__action-button']}>
          npm start
        </button>
      </Link>
      <LanguagesContainer />
      <SpeedInsights />
    </LandingMain>
  );
};

export default Home;

import styles from './page.module.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LandingMain from '@/components/Backgrounds/LandingMain';
import Link from 'next/link';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';

const Home = () => {
  return (
    <LandingMain>
      <UnderConstructionRibbon />
      <div className={styles['name']}>Δημήτρης Μανωλόπουλος</div>
      <Link href="/programming" className={styles['landing__action']}>
        <button type="button" className={styles['landing__action-button']}>
          npm start
        </button>
      </Link>
      <SpeedInsights />
    </LandingMain>
  );
};

export default Home;

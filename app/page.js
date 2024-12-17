import LandingMain from '@/components/Backgrounds/LandingMain';
import Link from 'next/link';
import styles from './page.module.css';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';
// import Slider from '@/components/Slider';

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
      {/* <Slider /> */}
    </LandingMain>
  );
};

export default Home;

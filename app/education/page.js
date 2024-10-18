import MainHeader from '@/components/MainHeader';
import Heading from '@/components/Heading';
import SideNav from '@/components/SideNav';
import TimelineItems from '@/components/TimelineItems';
import styles from './page.module.css';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import MainFooter from '@/components/MainFooter';


export default function Home() {
  return (
    <>
      <MainHeader />
      <SideNav />
      <main className={styles.main}>
        <Heading text="Σπουδές" />

        <div className={styles.fixed}>
          <section className={styles.education} id="education">
            <TimelineItems />
          </section>
        </div>
        {/* <MainFooter /> */}
      </main>
    </>
  );
}

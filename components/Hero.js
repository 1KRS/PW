'use client';

import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/components/Slider';
import Slider2 from '@/components/Slider2';
import TranslatedText from '@/components/TranslatedText';

import { useAppContext } from '@/context/AppContext';

const Hero = () => {
  const { language, programmingBackground } = useAppContext();
  

  return (
    <section
      className={
        styles['home'] +
        ' ' +
        styles[`${programmingBackground === 'dynamic' && 'home-dynamic'}`]
      }
      id="home"
    >
      <div
        className={
          styles['home-content'] +
          ' ' +
          styles[
            `${programmingBackground === 'dynamic' && 'home-content-dynamic'}`
          ]
        }
      >
        {language === 'english' ? (
          <h1>
            Hi, it's<pre> </pre>
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
            Είμαι ένας νεαρός Πλήρους-Εύρους Προγραμματιστής Ιστού με προσήλωση στην εξέλιξη και στόχο την βέλτιστη λύση.
          </TranslatedText>
        </h3>

        <div className={styles['sliders-container']}>
          <Slider />
          <Slider2 />
        </div>

        <div className={styles['btn-group']}>
          <Link href="#" className={styles.btn}>
            <TranslatedText>Πρόσληψη</TranslatedText>
          </Link>
          <Link href="/programming/contact" className={styles['btn-sec']}>
            <TranslatedText>Επικοινωνία</TranslatedText>
          </Link>
        </div>
      </div>
      <div className={styles['home-img']}>
        <Image
          className={styles.img}
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

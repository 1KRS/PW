import styles from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import TranslatedText from '@/components/TranslatedText';

import { έργα } from '@/db/έργα';

import { FaRegHandPointer } from 'react-icons/fa6';

export const metadata = {
  title: 'ΔΜ - Χαρτοφυλάκιο',
  description: 'Ο προσωπικός μου ιστότοπος ως προγραμματιστής',
  keywords: ['Προσωπικός Ιστότοπος', 'Personal Website', 'Personlig Webbplats'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const Portfolio = () => {
  return (
    <>
      <main className={styles.main}>
        <Heading text="Χαρτοφυλάκιο" />

        <section className={styles['χαρτοφυλάκιο']} id="χαρτοφυλάκιο">
          <div className={styles['περιέκτης-χαρτοφυλακίου']}>
            {έργα.reverse().map((project) => {
              return (
                <div
                  key={project.id}
                  className={styles['στοιχείο-χαρτοφυλακίου']}
                >
                  <Image
                    className={styles['εικόνα']}
                    src={project.imageSrc}
                    fill
                    alt={project.imageAlt}
                  />
                  <a
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                    className={styles['στρώση-χαρτοφυλακίου']}
                  >
                    <h4>
                      <TranslatedText>{project.title}</TranslatedText>
                    </h4>
                    <p>
                      <TranslatedText>{project.text}</TranslatedText>
                    </p>
                    <FaRegHandPointer
                      className={styles['εικονίδιο-συνδέσμου']}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;

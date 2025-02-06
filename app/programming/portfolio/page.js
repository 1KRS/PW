import styles from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import TranslatedText from '@/components/TranslatedText';

import { FaRegHandPointer } from 'react-icons/fa6';
import { έργα } from '@/db/έργα';

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

        <section className={styles.portfolio} id="portfolio">
          <div className={styles['portfolio-container']}>
            {έργα.reverse().map((project) => {
              return (
                <div key={project.id} className={styles['portfolio-item']}>
                  <Image
                    className={styles.img}
                    src={project.imageSrc}
                    fill
                    alt={project.imageAlt}
                  />
                  <a
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                    className={styles['portfolio-layer']}
                  >
                    <h4>
                      <TranslatedText>{project.title}</TranslatedText>
                    </h4>
                    <p>
                      <TranslatedText>{project.text}</TranslatedText>
                    </p>
                    <FaRegHandPointer className={styles['link-icon']} />
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

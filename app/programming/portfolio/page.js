import Heading from '@/components/Heading';
import styles from './page.module.css';
import Image from 'next/image';
import { FaRegHandPointer } from 'react-icons/fa6';
import Link from 'next/link';
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
            {έργα.map((project) => {
              return (
                <div key={project.id} className={styles['portfolio-item']}>
                  <Image
                    className={styles.img}
                    src={project.imageSrc}
                    fill
                    alt={project.imageAlt}
                  />
                  <Link
                    href={project.link}
                    className={styles['portfolio-layer']}
                  >
                    <h4>{project.title}</h4>
                    <p>{project.text}</p>
                    <FaRegHandPointer className={styles['link-icon']} />
                  </Link>
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

import Heading from '@/components/Heading';
import styles from './page.module.css';
import Image from 'next/image';
import { FaRegHandPointer } from 'react-icons/fa6';
import Link from 'next/link';
import { έργα } from '@/db/έργα'

export const metadata = {
  title: 'Το Χαρτοφυλάκιό μου',
  description: 'Ο Προσωπικός Μου Ιστότοπος ως προγραμματιστής',
  keywords: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

// const projects = [
//     { id: 1, title: 'Εργασιομανία', text: 'Οργάνωσε το κυνήγι εργασίας σου με αυτήν την εφαρμογή ιχνηλάτησης.', link:'http://ergasiomania.onrender.com' , imageSrc: '/images/Εργασιομανία.png', imageAlt: 'Ιστότοπος Εργασιομανίας'},
   
//   ];

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
                <p>
                  {project.text}
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
        )
      })}


            {/* <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Οργάνωσε το κυνήγι εργασίας σου με αυτήν την εφαρμογή
                  ιχνηλάτησης.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div>
            <div className={styles['portfolio-item']}>
              <Image
                className={styles.img}
                src="/images/Εργασιομανία.png"
                fill
                alt="Ιστότοπος Εργασιομανίας"
              />
              <Link
                href={'http://ergasiomania.onrender.com'}
                className={styles['portfolio-layer']}
              >
                <h4>Εργασιομανία</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis.
                </p>
                <FaRegHandPointer className={styles['link-icon']} />
              </Link>
            </div> */}


          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;

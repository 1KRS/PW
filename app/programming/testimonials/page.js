import Heading from '@/components/Heading';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './page.module.css';

const Testimonials = () => {
  return (
      <main className={styles.main}>
        <Heading text="Μαρτυρίες" />

        <section className={styles.testimonials} id="testimonials">
          <div className={styles['testimonials-container']}>
            {/* <div className={styles.wrapper}> */}
              <div className={styles['testimonial-item']}>
                <Image
                  className={styles.img}
                  src={'/images/mina-rad-K9T9hdf4PmI-unsplash.jpg'}
                  height={300}
                  width={300}
                  alt="Εικόνα Άνδρα"
                />
                <h2>Αλέξανδρος</h2>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>

              <div className={styles['testimonial-item']}>
                <Image
                  className={styles.img}
                  src={'/images/γυναίκα.png'}
                  height={300}
                  width={300}
                  alt="Εικόνα Γυναίκας"
                />
                <h2>Υπατία</h2>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>

              <div className={styles['testimonial-item']}>
                <Image
                  className={styles.img}
                  src={'/images/mina-rad-K9T9hdf4PmI-unsplash.jpg'}
                  height={300}
                  width={300}
                  alt="Εικόνα Άνδρα"
                />
                <h2>Σωκράτης</h2>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>

              <div className={styles['testimonial-item']}>
                <Image
                  className={styles.img}
                  src={'/images/γυναίκα.png'}
                  height={300}
                  width={300}
                  alt="Εικόνα Γυναίκας"
                />
                <h2>Αθηνά</h2>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            {/* </div> */}
          </div>
        </section>
      </main>
  );
};

export default Testimonials;

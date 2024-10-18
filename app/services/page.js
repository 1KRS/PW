import MainHeader from '@/components/MainHeader';
import SideNav from '@/components/SideNav';
import styles from './page.module.css';
import Heading from '@/components/Heading';
import MainFooter from '@/components/MainFooter';

const page = () => {
  return (
    <>
      <MainHeader />
      <SideNav />
      <main className={styles.main}>
        <section className={styles.services} id="services">
          <Heading text="Υπηρεσίες" />

          <div className={styles['services-container']}>
            <div className={styles['service-box']}>
              <div className={styles['service-info']}>
                <h4>Υπηρεσία ΔΧ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-box']}>
              <div className={styles['service-info']}>
                <h4>Υπηρεσία ΕΧ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-box']}>
              <div className={styles['service-info']}>
                <h4>Ανάπτυξη Μπροστά Μέρους</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-box']}>
              <div className={styles['service-info']}>
                <h4>Ανάπτυξη Πίσω Μέρους</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
        <MainFooter />
    </>
  );
};
export default page;

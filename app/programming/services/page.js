import styles from './page.module.css';

import Τίτλος from '@/components/Τίτλος';

export const metadata = {
  title: 'ΔΜ - Υπηρεσίες',
  description: 'Οι υπηρεσίες που προσφέρω',
  keywords: ['Υπηρεσίες', 'Services', 'Vittnesmål'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const ΣελίδαΥπηρεσιών = () => {
  return (
    <>
      <main className={styles.main}>
        <Τίτλος text="Υπηρεσίες" />

        <section className={styles.services} id="services">
          <div className={styles['services-container']}>
            <div className={styles['service-item']}>
              <div className={styles['service-info']}>
                <h4>Υπηρεσία ΔΧ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-item']}>
              <div className={styles['service-info']}>
                <h4>Υπηρεσία ΕΧ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-item']}>
              <div className={styles['service-info']}>
                <h4>Ανάπτυξη Μπροστά Μέρους</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non lectus dictum, dapibus ipsum in, lacinia lectus.
                  Pellentesque aliquam ac purus ac sagittis. Nullam gravida.
                </p>
              </div>
            </div>

            <div className={styles['service-item']}>
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
    </>
  );
};
export default ΣελίδαΥπηρεσιών;

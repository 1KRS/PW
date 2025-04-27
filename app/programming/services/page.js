import styles from './page.module.css';

import Τίτλος from '@/components/Τίτλος';
import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';
import ΚείμενοΤίτλοςΜικρήςΟθόνης from '@/components/Κείμενα/ΚείμενοΤίτλοςΜικρήςΟθόνης';
import ΠλήκτροΚειμένουΜικρήςΟθόνης from '@/components/Κουμπιά/ΠλήκτροΚειμένουΜικρήςΟθόνης';

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

        <section className={styles['τομέας-υπηρεσιών']} id="τομέας-υπηρεσιών">
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
        <ΠλαίσιοΜορφής
          καθορισμόςΔιαστάσεων="από μέσα"
          ακτίναΓωνίας={15}
          πάχοςΟρίου={1}
          ενεργόςΔιακόπτηςΦέγγουςΟρίων
          ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων
          pxΓιαΑπόκρυψη={1024}
        >
          <ΚείμενοΤίτλοςΜικρήςΟθόνης />
        </ΠλαίσιοΜορφής>
        <ΠλήκτροΚειμένουΜικρήςΟθόνης pxΓιαΑπόκρυψη={1024} />
      </main>
    </>
  );
};
export default ΣελίδαΥπηρεσιών;

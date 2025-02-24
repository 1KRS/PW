import styles from './page.module.css';

import Image from 'next/image';
import Heading from '@/components/Heading';
import Μαρτυρία from '@/components/Μαρτυρία';


import { μαρτυρίες } from '@/db/μαρτυρίες';
import { FaStar } from 'react-icons/fa';

export const metadata = {
  title: 'ΔΜ - Μαρτυρίες',
  description: 'Μαρτυρίες πελατών και συνεργατών',
  keywords: ['Μαρτυρίες', 'Testimonials', 'Vittnesmål'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const Μαρτυρίες = () => {
  return (
    <main className={styles.main}>
      <Heading text="Μαρτυρίες" />

      <section className={styles['τομέας-μαρτυριών']} id="τομέας-μαρτυριών">
        <div className={styles['περιέκτης-μαρτυριών']}>
          {/* <div className={styles.wrapper}> */}
          {μαρτυρίες.map((μαρτυρία) => (
            <Μαρτυρία
              key={μαρτυρία.id}
              id={μαρτυρία.id}
              όνομα={μαρτυρία.όνομα}
              βαθμολογία={μαρτυρία.βαθμολογία}
              κείμενο={μαρτυρία.κείμενο}
              διεύθυνσηΕικόνας={μαρτυρία.διεύθυνσηΕικόνας}
              κείμενοΕικόνας={μαρτυρία.κείμενοΕικόνας}
            />
          ))}
          {/* </div> */}
        </div>
      </section>
    </main>
  );
};

export default Μαρτυρίες;

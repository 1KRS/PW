import styles from './page.module.css';

import Τίτλος from '@/components/Τίτλος';
import ΓραμμήΠλήκτρωνΣελίδαςΣχετικά from '@/components/Navigations/ΓραμμήΠλήκτρωνΣελίδαςΣχετικά';

export const metadata = {
  title: 'ΔΜ - Σχετικά',
  description: 'Λεπτομέρειες σχετικά με τον ιστότοπο και εμένα',
  keywords: ['Προσωπικός Ιστότοπος', 'Personal Website', 'Personlig Webbplats'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const AboutPage = () => {
  return (
    <main className={styles.main}>
      <Τίτλος text="Σχετικά" />
      <ΓραμμήΠλήκτρωνΣελίδαςΣχετικά />
    </main>
  );
};

export default AboutPage;

import styles from './page.module.css';

import ΥπόβαθροΠρογραμματισμού from '@/components/Backgrounds/ΥπόβαθροΠρογραμματισμού';
import Κεφαλίδα from '@/components/Κεφαλίδες-Υποσέλιδα/Κεφαλίδα';
import ΠλαϊνήΣτήληΠρογραμματισμού from '@/components/Navigations/ΠλαϊνήΣτήληΠρογραμματισμού';
import Υποσέλιδο from '@/components/Κεφαλίδες-Υποσέλιδα/Υποσέλιδο';
// import MainSubheader from '@/components/MainSubheader';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';
import ΠιστοποιητικόΣεΠαράθυρο from '@/components/Modals/ΠιστοποιητικόΣεΠαράθυρο';
import ΑναδυόμενοΠαράθυροΡυθμίσεων from '@/components/Modals/ΑναδυόμενοΠαράθυροΡυθμίσεων';
import ΠλήκτροΡυθμίσεων from '@/components/Πλήκτρα/ΠλήκτροΡυθμίσεων';

export const metadata = {
  title: 'ΔΜ',
  description: 'Ο Προσωπικός Μου Ιστότοπος ως προγραμματιστής',
  keywords: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const ProgrammingLayout = ({ children }) => {
  return (
    <ΥπόβαθροΠρογραμματισμού>
      {/* -- Αναδυόμενα Παράθυρα -- */}
      <div className={styles['περιέκτης-αναδυόμενων-παραθύρων']}>
        <ΠιστοποιητικόΣεΠαράθυρο />
        <ΑναδυόμενοΠαράθυροΡυθμίσεων />
      </div>
      {/* --  -- */}
      <Κεφαλίδα />
      <UnderConstructionRibbon />
      {/* <MainSubheader /> */}
      <ΠλαϊνήΣτήληΠρογραμματισμού />
      {children}
      <ΠλήκτροΡυθμίσεων />
      <Υποσέλιδο />
    </ΥπόβαθροΠρογραμματισμού>
  );
};
export default ProgrammingLayout;

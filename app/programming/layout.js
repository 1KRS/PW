import styles from './layout.module.css';

import ΥπόβαθροΠρογραμματισμού from '@/components/Backgrounds/ΥπόβαθροΠρογραμματισμού';
import Κεφαλίδα from '@/components/Κεφαλίδες-Υποσέλιδα/Κεφαλίδα';
import ΠλαϊνήΣτήληΠρογραμματισμού from '@/components/Navigations/ΠλαϊνήΣτήληΠρογραμματισμού';
import Υποσέλιδο from '@/components/Κεφαλίδες-Υποσέλιδα/Υποσέλιδο';
// import MainSubheader from '@/components/MainSubheader';
import ΣήμαΥπόΚατασκευή from '@/components/ΣήμαΥπόΚατασκευή';
import ΠιστοποιητικόΣεΠαράθυρο from '@/components/Modals/ΠιστοποιητικόΣεΠαράθυρο';
import ΑναδυόμενοΠαράθυροΡυθμίσεων from '@/components/Modals/ΑναδυόμενοΠαράθυροΡυθμίσεων';
import ΚείμενοΜικρήςΟθόνηςΣεΠαράθυρο from '@/components/Modals/ΚείμενοΜικρήςΟθόνηςΣεΠαράθυρο';
import ΠλήκτροΡυθμίσεων from '@/components/Κουμπιά/ΠλήκτροΡυθμίσεων';

export const metadata = {
  title: 'ΔΜ',
  description: 'Ο Προσωπικός Μου Ιστότοπος ως προγραμματιστής',
  keywords: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const ΠλαίσιοΠρογραμματισμού = ({ children }) => {
  return (
    <ΥπόβαθροΠρογραμματισμού>
      {/* -- Αναδυόμενα Παράθυρα -- */}
      <div className={styles['περιέκτης-αναδυόμενων-παραθύρων']}>
        <ΠιστοποιητικόΣεΠαράθυρο />
        <ΑναδυόμενοΠαράθυροΡυθμίσεων />
        <ΚείμενοΜικρήςΟθόνηςΣεΠαράθυρο />
      </div>
      {/* --  -- */}
      <Κεφαλίδα />
      <ΣήμαΥπόΚατασκευή />
      {/* <MainSubheader /> */}
      <ΠλαϊνήΣτήληΠρογραμματισμού />
      {children}
      <div
        className={
          styles['περιέκτης-πλήκτρου-ρυθμίσεων-πλαισίου-προγραμματισμού']
        }
      >
        <ΠλήκτροΡυθμίσεων />
      </div>
      <div className={styles['περιέκτης-υποσέλιδου']}>
        <Υποσέλιδο />
      </div>
    </ΥπόβαθροΠρογραμματισμού>
  );
};
export default ΠλαίσιοΠρογραμματισμού;

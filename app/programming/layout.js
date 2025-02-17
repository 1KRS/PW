import ProgrammingBackground from '@/components/Backgrounds/ProgrammingBackground';
import Κεφαλίδα from '@/components/Κεφαλίδες-Υποσέλιδα/Κεφαλίδα';
import ProgrammingSideNav from '@/components/Navigations/ProgrammingSideNav';
import Υποσέλιδο from '@/components/Κεφαλίδες-Υποσέλιδα/Υποσέλιδο';
// import MainSubheader from '@/components/MainSubheader';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';
import ΠιστοποιητικόΣεΠαράθυρο from '@/components/Modals/ΠιστοποιητικόΣεΠαράθυρο';
import ΠαράθυροΡυθμίσεων from '@/components/Modals/ΑναδυόμενοΠαράθυροΡυθμίσεων';
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
    <ProgrammingBackground>
      {/* -- Αναδυόμενα Παράθυρα -- */}
      <ΠιστοποιητικόΣεΠαράθυρο />
      <ΠαράθυροΡυθμίσεων />
      
      <Κεφαλίδα />
      <UnderConstructionRibbon />
      {/* <MainSubheader /> */}
      <ProgrammingSideNav />
      {children}
      <ΠλήκτροΡυθμίσεων />
      <Υποσέλιδο />
    </ProgrammingBackground>
  );
};
export default ProgrammingLayout;

import ProgrammingBackground from '@/components/Backgrounds/ProgrammingBackground';
import MainHeader from '@/components/Header-Footer/MainHeader';
import ProgrammingSideNav from '@/components/Navigations/ProgrammingSideNav';
import MainFooter from '@/components/Header-Footer/MainFooter';
// import MainSubheader from '@/components/MainSubheader';
import UnderConstructionRibbon from '@/components/UnderDevelopmentRibbon';
import ΠιστοποιητικόΣεΠαράθυρο from '@/components/Modals/Certificate';

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
      <MainHeader />
      <UnderConstructionRibbon />
      <ΠιστοποιητικόΣεΠαράθυρο />

      {/* <MainSubheader /> */}
      <ProgrammingSideNav />
      {children}
      <MainFooter />
    </ProgrammingBackground>
  );
};
export default ProgrammingLayout;

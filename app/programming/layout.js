import ProgrammingBackground from '@/components/Backgrounds/ProgrammingBackground';
import MainHeader from '@/components/MainHeader';
import ProgrammingSideNav from '@/components/ProgrammingSideNav';
import MainFooter from '@/components/MainFooter';
// import MainSubheader from '@/components/MainSubheader';
import UnderConstructionRibbon from '@/components/UnderConstructionRibbon';

const ProgrammingLayout = ({ children }) => {
  return (
    <ProgrammingBackground>
      <MainHeader />
      <UnderConstructionRibbon />
      {/* <MainSubheader /> */}
      <ProgrammingSideNav />
      {children}
      <MainFooter />
    </ProgrammingBackground>
  );
};
export default ProgrammingLayout;

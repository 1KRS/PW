import MainHeader from '@/components/MainHeader';
import ProgrammingSideNav from '@/components/ProgrammingSideNav';
import MainFooter from '@/components/MainFooter';

const ProgrammingLayout = ({children}) => {
  return (
    <>
      <MainHeader />
      <ProgrammingSideNav />
      {children}
      <MainFooter />
    </>
  );
};
export default ProgrammingLayout;

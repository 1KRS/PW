import styles from './LandingMain.module.css';

const LandingMain = ({ children }) => {
  return <main className={styles["landing-main"]}>{children}</main>;
};
export default LandingMain;

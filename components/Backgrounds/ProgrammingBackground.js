import styles from './ProgrammingBackground.module.css';

const ProgrammingBackground = ({ children }) => {
  return <div className={styles["background-image"]}>{children}</div>;
};
export default ProgrammingBackground;

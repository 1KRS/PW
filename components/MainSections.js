
import styles from './Heading.module.css'


const ΚύριεςΕνότητες = ({ children, classes }) => {
  const newClasses = classes;

  return <div className={styles.fixed}>{children}</div>;
};

export default ΚύριεςΕνότητες;
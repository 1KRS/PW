import styles from '@/components/Τίτλος.module.css';

import Μετάφραση from '@/components/Μετάφραση';

const Τίτλος = ({ text }) => {
  return (
    <h2 className={styles.τίτλος}>
      <Μετάφραση>{text}</Μετάφραση>
    </h2>
  );
};
export default Τίτλος;

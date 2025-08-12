import styles from '@/components/Τίτλος.module.css';

import Μετάφραση from '@/components/Μετάφραση';

const Τίτλος = ({ text }) => {
  return (
    <h1 className={styles.τίτλος}>
      <Μετάφραση>{text}</Μετάφραση>
    </h1>
  );
};
export default Τίτλος;

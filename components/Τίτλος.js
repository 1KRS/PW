import styles from '@/components/Τίτλος.module.css';

import TranslatedText from '@/components/TranslatedText';

const Τίτλος = ({ text }) => {
  return (
    <h2 className={styles.τίτλος}>
      <TranslatedText>{text}</TranslatedText>
    </h2>
  );
};
export default Τίτλος;

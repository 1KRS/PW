import styles from '@/components/Heading.module.css';
import TranslatedText from '@/components/TranslatedText';

const Heading = ({ text }) => {
  return (
    <h2 className={styles.heading}>
      <TranslatedText>{text}</TranslatedText>
    </h2>
  );
};
export default Heading;

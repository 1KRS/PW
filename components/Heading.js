import styles from './Heading.module.css';
import TranslatedText from './TranslatedText';

const Heading = ({ text }) => {
  return (
    <h2 className={styles.heading}>
      <TranslatedText>{text}</TranslatedText>
    </h2>
  );
};
export default Heading;

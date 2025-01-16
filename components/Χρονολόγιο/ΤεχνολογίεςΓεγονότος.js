import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import TranslatedText from '../TranslatedText';
import TechIcon from '../TechIcon';

const ΤεχνολογίεςΓεγονότος = ({ στιγμή }) => {

  const { τεχνολογίες } = στιγμή;

  return τεχνολογίες.length !== 0 ? (
    <div
      className={
        styles['tech-container'] + ' ' + styles[`tech-${τεχνολογίες.length}`]
      }
    >
      {τεχνολογίες.map((τεχνολογία) => {
        return <TechIcon key={τεχνολογία} όνομαΤεχνολογίας={τεχνολογία} />;
      })}
    </div>
  ) : null;
};

export default ΤεχνολογίεςΓεγονότος;

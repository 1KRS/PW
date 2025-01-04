import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';
import TechIcon from '../TechIcon';

const ΤεχνολογίεςΓεγονότος = ({ τεχνολογίες }) => {
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

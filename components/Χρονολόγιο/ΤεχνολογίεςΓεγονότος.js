import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import Μετάφραση from '../Μετάφραση';
import TechIcon from '../TechIcon';

const ΤεχνολογίεςΓεγονότος = ({ στιγμή }) => {
  const { τεχνολογίες } = στιγμή;

  return τεχνολογίες.length !== 0 ? (
    <div
      className={
        styles['περιέκτης-τεχνολογιών'] + ' ' + styles[`tech-${τεχνολογίες.length}`]
      }
    >
      {τεχνολογίες.map((τεχνολογία) => {
        return <TechIcon key={τεχνολογία} όνομαΤεχνολογίας={τεχνολογία} />;
      })}
    </div>
  ) : null;
};

export default ΤεχνολογίεςΓεγονότος;

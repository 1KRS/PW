import styles from './ΔεξιόστροφηΤαινίαΚύλισης.module.css';

import { πακέτα } from '@/db/τεχνολογίες';

const ΔεξιόστροφηΤαινίαΚύλισης = () => {
  return (
    <div className={styles.wrapper}>
      {πακέτα.map((tech, index) => {
        return (
          <div
            key={index + 1}
            className={styles.item + ' ' + styles[`item${index}`]}
          >
            {tech}
          </div>
        );
      })}
    </div>
  );
};
export default ΔεξιόστροφηΤαινίαΚύλισης;

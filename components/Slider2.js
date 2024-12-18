import styles from './Slider2.module.css';
import { πακέτα } from '@/db/τεχνολογίες';

const Slider2 = () => {
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
export default Slider2;

import styles from '@/components/TimelineItems.module.css';

import ΠεριεχόμενοΓεγονότος from '@/components/Event/ΠεριεχόμενοΓεγονότος';
import ΤελείαΓεγονότος from '@/components/Event/ΤελείαΓεγονότος';

const Γεγονός = ({ στιγμή }) => {
  return (
    <article className={styles['timeline-item']}>
      <ΤελείαΓεγονότος />
      <ΠεριεχόμενοΓεγονότος στιγμή={στιγμή} />
    </article>
  );
};

export default Γεγονός;

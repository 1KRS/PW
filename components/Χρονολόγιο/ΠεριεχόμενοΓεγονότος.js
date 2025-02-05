import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΕπάνωΓραμμή from '@/components/Χρονολόγιο/ΕπάνωΓραμμή';
import ΠλαϊνάΕικονίδια from '@/components/Χρονολόγιο/ΠλαϊνάΕικονίδια';
import ΚείμενοΓεγονότος from '@/components/Χρονολόγιο/ΚείμενοΓεγονότος';
import ΤεχνολογίεςΓεγονότος from '@/components/Χρονολόγιο/ΤεχνολογίεςΓεγονότος';
import ΠερίβλημαΓεγονότος from '@/components/Χρονολόγιο/ΠερίβλημαΓεγονότος';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

const ΠεριεχόμενοΓεγονότος = ({ στιγμή, γεγονόςΣεΜονόΑριθμό }) => {
  const { γεγονός, οντότητα, κείμενο } = στιγμή;

  const { είδος, έναρξη, λήξη, ολοκλήρωση } = γεγονός;
  const { όνομα, τύπος } = οντότητα;

  const { μελλοντικόΉΠαρελθοντικόΓεγονός } = στοιχείαΗμερομηνιών(έναρξη, λήξη);

  const κατάστασηΓεγονότος =
    μελλοντικόΉΠαρελθοντικόΓεγονός === 'Μελλοντικό'
      ? 'Εν αναμονή'
      : !ολοκλήρωση
      ? 'Παρατημένο'
      : λήξη === ''
      ? 'Εν εξελίξει'
      : ολοκλήρωση && 'Ολοκληρωμένο';

  const μεΉΧωρίςΔευτερεύουσαΓραμμή =
    όνομα || τύπος ? 'με-δευτερεύουσα-γραμμή' : 'χωρίς-δευτερεύουσα-γραμμή';

  const μεΉΧωρίςΚείμενο = κείμενο ? 'με-κείμενο' : 'χωρίς-κείμενο';

  const μορφήΠεριβλήματος =
    κατάστασηΓεγονότος === 'Εν αναμονή'
      ? 'εν-αναμονή'
      : κατάστασηΓεγονότος === 'Παρατημένο'
      ? 'παρατημένο'
      : κατάστασηΓεγονότος === 'Εν εξελίξει'
      ? 'εν-εξελίξει'
      : 'ολοκληρωμένο';

  // console.log(στιγμή.ταυτότητα, όνομα, μεΉΧωρίςΔευτερεύουσαΓραμμή);

  return (
    <ΠερίβλημαΓεγονότος
      μεΉΧωρίςΔευτερεύουσαΓραμμή={μεΉΧωρίςΔευτερεύουσαΓραμμή}
      μεΉΧωρίςΚείμενο={μεΉΧωρίςΚείμενο}
      μορφήΠεριβλήματος={μορφήΠεριβλήματος}
    >
      <ΕπάνωΓραμμή
        στιγμή={στιγμή}
        γεγονόςΣεΜονόΑριθμό={γεγονόςΣεΜονόΑριθμό}
        μεΉΧωρίςΔευτερεύουσαΓραμμή={μεΉΧωρίςΔευτερεύουσαΓραμμή}
        μεΉΧωρίςΚείμενο={μεΉΧωρίςΚείμενο}
      />
      <ΚείμενοΓεγονότος
        στιγμή={στιγμή}
        γεγονόςΣεΜονόΑριθμό={γεγονόςΣεΜονόΑριθμό}
      />
      <ΠλαϊνάΕικονίδια
        στιγμή={στιγμή}
        γεγονόςΣεΜονόΑριθμό={γεγονόςΣεΜονόΑριθμό}
        κατάστασηΓεγονότος={κατάστασηΓεγονότος}
      />
      <ΤεχνολογίεςΓεγονότος στιγμή={στιγμή} />
    </ΠερίβλημαΓεγονότος>
  );
};

export default ΠεριεχόμενοΓεγονότος;

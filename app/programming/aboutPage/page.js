import styles from './page.module.css';

import Heading from '@/components/Heading';

const aboutPage = () => {
  return (
    <main className={styles.main}>
      <Heading text="Σχετικά με τον ιστότοπο" />
      <section
        className={styles['σχετικά-με-ιστότοπο']}
        id="σχετικά-με-ιστότοπο"
      >
      </section>
    </main>
  )
}

export default aboutPage

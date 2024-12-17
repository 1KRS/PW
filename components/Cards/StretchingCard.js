import Image from 'next/image';
import styles from './StretchingCard.module.css';

const StretchingCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imgbx}>
        <Image
          className={styles.img}
          src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
          width={260}
          height={260}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <h2>Πρώτη Κάρτα</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolores consequatur incidunt, ducimus repellat?
        </p>
      </div>
    </article>
  );
};

export default StretchingCard;

import styles from './Footer.module.css'
export default function Footer({ complete, total }) {
  return (
    <div className={styles.FooterContainer}>
      <span className={styles.Complete}>Complete:{complete}</span>
      <span className={styles.Total}>Total:{total}</span>
    </div>
  );
}

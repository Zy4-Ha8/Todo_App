import styles from './Header.module.css'
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h2>ToDo App</h2>
      <h3>Home</h3>
    </div>
  );
}

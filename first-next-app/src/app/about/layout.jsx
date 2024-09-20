import styles from '../page.module.css'

export default function PageLayout({ children }) {
  return (
    <main className={styles.main}>
      <nav></nav>
      {children}
      <footer></footer>
    </main>
  )
}
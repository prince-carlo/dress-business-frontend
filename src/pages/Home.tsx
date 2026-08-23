import styles from './Home.module.scss'

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Dress Business</h1>
      <p className={styles.subtitle}>Scaffold is live — Phase 1 builds the real layout from here.</p>
    </section>
  )
}

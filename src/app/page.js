import Navbar from './components/Navbar/Navbar'
import styles from './page.module.css'

export default function Home() {
  console.log("")
  return (
    <main className={styles.main}>
      <Navbar />

      <section>
        <h2>Projetos</h2>
        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Weather Forecast <span>-&gt;</span>
            </h2>
            <p>Projeto de previsão de tempo.</p>
          </a>
        </div>
      </section>
    </main>
  )
}

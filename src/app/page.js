import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import styles from './page.module.css';

export default function Home() {
  console.log("")
  return (

    <main className={styles.main}>
      <section id='nav'>
        <Navbar />
      </section>
      <section id='about'>
        <About />
      </section>
    </main>

  )
}

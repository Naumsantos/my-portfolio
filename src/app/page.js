import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

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
      <section id='projects'>
        <Projects />
      </section>
      <section id='footer'>
        Footer
      </section>
    </main>

  )
}

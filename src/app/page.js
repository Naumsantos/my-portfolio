import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import styles from './page.module.css';

export default function Home() {
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
      <section id='skills'>
        <Skills />
      </section>
      <footer>
        <div class="flex-container footer">
          <p>&copy; 2024 Meu portifólio</p>
          <p>Desenvolvido por: Naum Santos Mourão</p>
        </div>
      </footer>
    </main>
  )
}

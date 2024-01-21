import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import TopButton from './components/Topbutton/TopButton';

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
      <section>
        <Footer />
      </section>
      <TopButton />
    </main>
  )
}

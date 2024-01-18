import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div>
      <section id={styles.projects}>
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
    </div>
  )
}

export default Projects

import Image from 'next/image';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Projetos</h2>
      <div className={styles.grid}>
        <div className={styles.grid_card}>
          <div>
            <a
              href="https://github.com/Naumsantos/weather"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Weather Forecast <span>-&gt;</span>
              </h3>
            </a>
            <p>Projeto de previsão de tempo.</p>
          </div>

          <Image
            src="/images/imageProjects/weatherForecast.png"
            alt='imagem do aplicatico de previsão do tempo'
            width={400}
            height={300}
            className={styles.image_card}
          />
        </div>
        <div className={styles.grid_card}>
          <div>
            <a
              href="https://github.com/Naumsantos/weather"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Weather Forecast <span>-&gt;</span>
              </h3>
            </a>
            <p>Projeto de previsão de tempo.</p>
          </div>

          <Image
            src="/images/imageProjects/weatherForecast.png"
            alt='imagem do aplicatico de previsão do tempo'
            width={400}
            height={300}
            className={styles.image_card}
          />
        </div>
        <div className={styles.grid_card}>
          <div>
            <a
              href="https://github.com/Naumsantos/weather"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Weather Forecast <span>-&gt;</span>
              </h3>
            </a>
            <p>Projeto de previsão de tempo.</p>
          </div>

          <Image
            src="/images/imageProjects/weatherForecast.png"
            alt='imagem do aplicatico de previsão do tempo'
            width={400}
            height={300}
            className={styles.image_card}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects

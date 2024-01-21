import styles from './Projects.module.css';
import Project from '../Project/Project.js';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Projetos</h2>
      <div className={styles.grid}>
        <Project
          numProject="01"
          linkGithub="https://github.com/Naumsantos/weather"
          titleProject="Weather Forecast"
          descProject="O desafio era criar uma página web que fosse responsiva e que contivesse algumas características como exibição de data/hora, cidade, temperatura atual, descrição do tempo, temperatura mínima e máxima, velocidade do vento e umidade, todas essas características foram atendidas com o template que Eu escolhi e que está no Figma."
          linkImg="/images/imageProjects/weatherForecast.png"
          titleImg="imagem do aplicatico de previsão do tempo"
          techs={["Javascript", "HTML", "CSS", "API"]}
        />

        <Project
          numProject="02"
          linkGithub="https://github.com/Naumsantos/formulario-animado---CSS3-JS"
          titleProject="Formulario animado"
          descProject="Estudando sobre animações com CSS + JS puro assistindo aos vídeos do canal da Rocketseat, repliquei esse formulário e adicionei algumas alterações."
          linkImg="/images/imageProjects/formAminated.png"
          titleImg="imagem do formulário animado"
          techs={["Javascript", "HTML", "CSS3"]}
          linkSite="https://naumsantos.github.io/formulario-animado/"
        />

        <Project
          numProject="03"
          linkGithub="https://github.com/Naumsantos/landing_page"
          titleProject="Landing page de turismo."
          descProject="Projeto legal criado durante um estudo sobre Flex-box usando CSS puro, repliquei esse projeto e adicionei algumas melhorias."
          linkImg="/images/imageProjects/landingpage.png"
          titleImg="imagem do da landing page"
          techs={["Javascript", "HTML", "CSS3", "Responsividade"]}
          linkSite="https://naumsantos.github.io/landing_page/"
        />
      </div>
    </div>
  )
}

export default Projects

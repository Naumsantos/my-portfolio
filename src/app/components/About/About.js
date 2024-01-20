import styles from "./About.module.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h2>SOBRE</h2>
      </div>
      <div className={styles.profile}>
        <div className={styles.image_links}>
          <Image
            className={styles.imgProfile}
            src="/images/profile.jpeg"
            alt="Imagem do perfil"
            width={240}
            height={240}
          />
          <ul className="links_list">
            <li className={styles.tooltip}>
              <a href="https://www.linkedin.com/in/naum-mourao/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/linkedin.svg"
                  alt="Icone Linkedin"
                  height={25}
                  width={25}
                />
              </a>
              <span className={styles.tooltiptext}>Linkedin</span>
            </li>

            <li className={styles.tooltip}>
              <a href="https://www.linkedin.com/in/naum-mourao/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/github.svg"
                  alt="Icone Github"
                  height={25}
                  width={25}
                />
              </a>
              <span className={styles.tooltiptext}>Github</span>
            </li>

            <li className={styles.tooltip}>
              <a href="https://www.instagram.com/naum_santos/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/instagram.svg"
                  alt="Icone Instagram"
                  height={25}
                  width={25}
                />
              </a>
              <span className={styles.tooltiptext}>Instagram</span>
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <h3>Naum Santos Mourão</h3>
          <p>
            Sou <span>Desenvolvedor Frontend Jr</span> e fascinado em transformar ideias em códigos.
            Estou em busca de iniciar carreira na área de tecnologia, sou Baicharel em Ciência da Computação. Desenvolvo projetos utilizando <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> e <span>ReactJS</span>. Além disso, busco aprimorar minhas habilidades por meio de cursos online intensivos, com foco em <span>Front End</span>, <span>UX/UI Design</span> e <span>Acessibilidade</span>.
          </p>
          <div >
            <a className={styles.unemployed} href="mailto:naum_santos@hotmail.com">
              &#64;  Disponível para  contratação </a>
          </div>
        </div>
      </div>
      <Image
        className={styles.imgIcon}
        src="/images/icon.svg"
        alt="imagem decorativa"
        height={230}
        width={230}
      />
    </div>
  )
}

export default About
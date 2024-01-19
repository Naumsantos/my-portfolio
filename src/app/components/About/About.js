import styles from "./About.module.css";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
            <li>
              <a href="https://www.linkedin.com/in/naum-mourao/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/linkedin.svg"
                  alt="Icone Linkedin"
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li>

              <a href="https://www.linkedin.com/in/naum-mourao/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/github.svg"
                  alt="Icone Github"
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/naum_santos/" target="_blank">
                <Image
                  className="btnSocial"
                  src="/images/instagram.svg"
                  alt="Icone Instagram"
                  height={25}
                  width={25}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <h3>Naum Santos Mourão</h3>
          <p>Sou <b>Desenvolvedor Frontend Jr</b> e fascinado em transformar ideias em códigos.</p>
          <div className={styles.unemployed}>
            <p><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>  Disponível para  contratação </p>
          </div>
        </div>
      </div>
      <Image
        className={styles.imgTest}
        src="/images/icon.svg"
        alt="imagem decorativa"
        height={230}
        width={230}
      />
    </div>
  )
}

export default About
import Image from 'next/image';
import styles from './Project.module.css';


const Project = ({ numProject, linkGithub, titleProject, descProject, linkImg, titleImg, techs, linkSite }) => {
  return (
    <div className={styles.grid_card}>
      <div className={styles.desc}>
        <div className={styles.titleCard}>
          <span className={styles.numProject}>{numProject}</span>
          <span>{titleProject}</span>
        </div>

        <div className={styles.descProject}>
          <p>{descProject}</p>
        </div>

        <div className={styles.stacks}>
          {techs && techs.map((tech, index) => (
            <span key={index}>#{tech} </span>
          ))}
        </div>

        <div className="buttons">
          <a
            className='btn1 btn'
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >Veja no Github</a>
          <a
            className='btn'
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visite o site
          </a>
        </div>
      </div>

      <Image
        src={linkImg}
        alt={titleImg}
        width={400}
        height={300}
        className={styles.image_card}
      />
    </div>
  )
}

export default Project
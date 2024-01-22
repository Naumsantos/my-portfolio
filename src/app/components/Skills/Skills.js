import Image from 'next/image';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.titleSection}>
        <h2>SKILLS</h2>
      </div>
      <div className={styles.techs}>
        <div>
          <Image
            src="/images/techs/css3.svg"
            alt="Logo CSS3"
            width={100}
            height={100}
          />
          <span>CSS3</span>
        </div>
        <div>
          <Image
            src="/images/techs/html.svg"
            alt="Logo HTML"
            width={100}
            height={100}
          />
          <span>HTML</span>
        </div>
        <div>
          <Image
            src="/images/techs/javascript.svg"
            alt="Logo Javascript"
            width={100}
            height={100}
          />
          <span>Javascript</span>
        </div>
        <div>
          <Image
            src="/images/techs/nextjs.svg"
            alt="Logo NextJS"
            width={100}
            height={100}
          />
          <span>NextJS</span>
        </div>
        <div>
          <Image
            src="/images/techs/react.svg"
            alt="Logo ReactJS"
            width={100}
            height={100}
          />
          <span>ReactJS</span>
        </div>
      </div>
      <p>Sempre aprendendo novas tecnologias.</p>
    </div>
  )
}

export default Skills
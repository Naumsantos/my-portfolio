import Image from 'next/image';

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Image
          className={styles.brand}
          src="/images/logo.svg"
          alt="Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <ul className="links_list">
          <li>
            <a href="#">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects">
              Projetos
            </a>
          </li>
          <li>
            <a href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
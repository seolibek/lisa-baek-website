//rfce 
import styles from './HeroStyles.module.css';
import heroimg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import githubIcon from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
  return(
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroimg} 
            alt="Profile picture of Lisa Baek" 
        />
        <img 
        className={styles.colorMode}
            src = {themeIcon}
            alt = 'color mode icon'
            onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
            Lisa
            <br />
            Baek
        </h1>
        <h2>Software Engineer - Data </h2>
        <span>
            <a href="https://www.linkedin.com/in/lisa-baek-113a89206/">
                <img 
                    src={linkedinIcon}
                    alt= "LinkedIn Icon"
                />
            </a>
            <a href="https://www.github.com/seolibek">
                <img 
                    src={githubIcon}
                    alt= "LinkedIn Icon"
                />
            </a>
        </span>
        <p>
            With a passion for advancing tools in Machine Learning for healthcare
        </p>
        <a href={CV} download>
            <button className = "hover">Resume</button>
        </a>
    </div>
  </section>
  );
}
export default Hero

//rfce 
import styles from './HeroStyles.module.css';
import heroimg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
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
        <h2>Software Engineer + Undergraduate Researcher </h2>
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
        <p className={styles.decription}>
           Hi! My name is Lisa, and I'm an incoming junior at Brown University studying Applied Math-Computer Science. 
           I've spent my last few summers focusing on research via REU programs, and am interested in applying Machine Learning 
           in a healthcare context. Below are some projects I've worked on... more to come soon!
        </p>
        <a href={CV} download>
            <button className = "hover">Resume</button>
        </a>
    </div>
  </section>
  );
}
export default Hero

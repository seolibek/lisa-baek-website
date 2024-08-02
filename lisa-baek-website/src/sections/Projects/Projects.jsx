import styles from "./ProjectsStyles.module.css";
import globe from "../../assets/globe.png";
import dna from "../../assets/dna.png";
import dimred from "../../assets/dimred.png";

import ProjectCard from "../../common/ProjectCard";
import pdf from "../../assets/ICERM.pdf";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={globe}
          link="https://github.com/Praccho/GeoLDM"
          alt="globe"
          title="GeoLDM"
          description="Deep Learning Final Group Project"
        ></ProjectCard>
        <ProjectCard
          src={dimred}
          link="https://github.com/seolibek/Tufts2024"
          alt="globe"
          title="DimRED"
          description={
            <>
              Summer 2024 REU Project, conducted at Tufts University,
              <br />
              with Dr. James Murphy
            </>
          }
        ></ProjectCard>
        <ProjectCard
          src={dna}
          link={pdf}
          alt="globe"
          title="Optimal DNA Self-assembly"
          description="Summer 2023 REU Project, conducted at ICERM, presented at JMM 2024"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard({ src, link, alt, title, description }) {
  return (
    <div>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;

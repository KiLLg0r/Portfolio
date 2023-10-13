import styles from "./portfolio.module.scss";

// Components
import ProjectCard from "@components/Project card/projectCard";
import ScrollNext from "@components/ScrollNext/scrollNext";

const getGitHubProjects = async () => {
  const res = await fetch("https://api.github.com/users/KiLLg0r/repos");

  return res.json();
};

const Portfolio = async ({ hideScroll = false }) => {
  const GitHubProjects = await getGitHubProjects();

  GitHubProjects.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h1 className={styles.portfolio__title}>&lt;Portfolio &#47;&gt;</h1>
      <div className={styles.portfolio__projects}>
        {GitHubProjects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
      {!hideScroll && (
        <div
          style={{ display: "grid", placeItems: "center", marginTop: "2rem" }}
        >
          <ScrollNext to="#contact" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;

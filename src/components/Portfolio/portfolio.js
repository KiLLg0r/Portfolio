import styles from "./portfolio.module.scss";

// Components
import ProjectCard from "@components/ProjectCard/projectCard";
import ScrollNext from "@components/ScrollNext/scrollNext";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env["NEXT_PUBLIC_GITHUB"],
});

const getGitHubProjects = async () => {
  const res = await octokit.request("GET /users/{username}/repos", {
    username: "KiLLg0r",
    sort: "updated",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res.data;
};

const Portfolio = async ({ hideScroll = false }) => {
  const GitHubProjects = await getGitHubProjects();

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

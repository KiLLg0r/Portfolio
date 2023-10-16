import styles from "./projectCard.module.scss";
import Link from "next/link";

const getProjectLanguages = async (name) => {
  const res = await fetch(
    `https://api.github.com/repos/KiLLg0r/${name}/languages`,
  );

  return res.json();
};

const ProjectCard = async ({ name, description }) => {
  const languages = await getProjectLanguages(name);

  return (
    <div className={styles.projectCard}>
      <h1 className={styles.projectCard__name}>{name}</h1>
      {Object?.keys(languages)?.length > 0 && (
        <div className={styles.projectCard__languages}>
          {Object.keys(languages).map((key) => (
            <div
              key={key}
              className={`${styles.projectCard__languages__language} ${styles[key]}`}
            >
              {key}
            </div>
          ))}
        </div>
      )}
      {description && (
        <div className={styles.projectCard__description}>{description}</div>
      )}
      <Link href={`/portfolio/${name}`} className={styles.viewMore}>
        <span>View more</span>
        <svg
          viewBox="-5 -5 110 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
        </svg>
      </Link>
    </div>
  );
};

export default ProjectCard;

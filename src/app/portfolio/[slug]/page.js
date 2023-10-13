import styles from "./page.module.scss";

// Components
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env["NEXT_PUBLIC_GITHUB"],
});

const getReadme = async (slug) => {
  const readme = await octokit.request("GET /repos/{owner}/{repo}/readme", {
    owner: "KiLLg0r",
    repo: slug,

    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      accept: "application/vnd.github.html",
    },
  });
  return readme.data;
};

const getProjectLanguages = async (name) => {
  const res = await fetch(
    `https://api.github.com/repos/KiLLg0r/${name}/languages`,
  );

  return res.json();
};

const getProjectDescription = async (name) => {
  const res = await fetch(`https://api.github.com/repos/KiLLg0r/${name}`);

  return res.json();
};

const Page = async ({ params }) => {
  const readme = await getReadme(params.slug);
  const languages = await getProjectLanguages(params.slug);
  const { description } = await getProjectDescription(params.slug);

  return (
    <div className={styles.projectPage}>
      <h1 className={styles.projectPage__title}>
        {params.slug}
        <div>
          <a
            href={`https://github.com/KiLLg0r/${params.slug}`}
          >{`https://github.com/KiLLg0r/${params.slug}`}</a>
        </div>
      </h1>
      {Object?.keys(languages)?.length > 0 && (
        <div className={styles.projectPage__languages}>
          {Object.keys(languages).map((key) => (
            <div
              key={key}
              className={`${styles.projectPage__languages__language} ${styles[key]}`}
            >
              {key}
            </div>
          ))}
        </div>
      )}
      {description && (
        <p className={styles.projectPage__description}>{description}</p>
      )}
      <div dangerouslySetInnerHTML={{ __html: readme }}></div>
    </div>
  );
};

export default Page;

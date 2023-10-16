import styles from "./page.module.scss";

// Components
import { Octokit } from "octokit";
import { Suspense } from "react";

import GoBack from "@components/GoBack/goBack";
import Loading from "@components/Loading/loading";
import ScrollToTop from "@components/ScrollToTop/scrollToTop";

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
  const res = await octokit.request("GET /repos/{owner}/{repo}/languages", {
    owner: "KiLLg0r",
    repo: name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res.data;
};

const getProjectDescription = async (name) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "KiLLg0r",
    repo: name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res.data;
};

const Languages = async ({ name }) => {
  const languages = await getProjectLanguages(name);
  return (
    <>
      <div className={styles.projectPage__subtitle}>Languages:</div>
      {Object?.keys(languages)?.length > 0 ? (
        <div className={styles.projectPage__languages}>
          <div className={styles.projectPage__languages__list}>
            {Object.keys(languages).map((key) => (
              <span
                key={key}
                className={`${styles.projectPage__languages__language} ${styles[key]}`}
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className={styles.projectPage__placeholder}>
          Without programming languages
        </p>
      )}
    </>
  );
};

const Description = async ({ name }) => {
  const { description } = await getProjectDescription(name);
  return (
    <>
      <div className={styles.projectPage__subtitle}>Description:</div>
      {description ? (
        <p className={styles.projectPage__description}>{description}</p>
      ) : (
        <p className={styles.projectPage__placeholder}>
          No description provided
        </p>
      )}
    </>
  );
};

const Readme = async ({ name }) => {
  const readme = await getReadme(name);
  return (
    <>
      <div className={styles.projectPage__subtitle}>Readme:</div>
      <div
        dangerouslySetInnerHTML={{ __html: readme }}
        className={styles.projectPage__readme}
      ></div>
    </>
  );
};
const Page = ({ params }) => {
  return (
    <div className={styles.projectPage} id="projectPage">
      <ScrollToTop />
      <GoBack to="/#portfolio" />
      <h1 className={styles.projectPage__title}>{params.slug}</h1>
      <a
        href={`https://github.com/KiLLg0r/${params.slug}`}
        className={styles.projectPage__link}
      >{`https://github.com/KiLLg0r/${params.slug}`}</a>
      <Suspense fallback={<Loading />}>
        <Languages name={params.slug} />
        <Description name={params.slug} />
        <Readme name={params.slug} />
      </Suspense>
    </div>
  );
};

export default Page;
export const dynamic = "force-dynamic";

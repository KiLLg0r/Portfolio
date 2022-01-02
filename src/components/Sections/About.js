import { ReactComponent as CodeSVG } from "../../assets/svg/code.svg";
import { ReactComponent as PersonSVG } from "../../assets/svg/person.svg";
import { ReactComponent as HiringSVG } from "../../assets/svg/hiring.svg";
import { ReactComponent as AboutSVG } from "../../assets/svg/about-me.svg";

import { useEffect, useState } from "react";

import "../../assets/css/about-me.css";

const About = () => {
  const [showSVG, setShowSVG] = useState(false);

  const options = {
    threshold: 0.5,
  };

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowSVG(true);
        }
      });
    }, options);
    observer.observe(document.querySelector("#about"));
    return () => observer.disconnect();
  });
  return (
    <section id="about" style={{ display: "none" }}>
      <AboutSVG className={`${showSVG ? "animated" : ""}`} />;
      <div className="row">
        <div className="card custom-border border-1">
          <div className="text">
            <div className="icon">
              <CodeSVG />
            </div>
            <div className="title">What I do?</div>
            <div className="desc">
              I create <span>web applications, websites and UX/UI designs</span>. My portfolio contains both{" "}
              <span>static and fullstack</span> sites (including databases and back-end for them) and{" "}
              <span>Android</span> applications based on web technology. I use frameworks like{" "}
              <span>React and Laravel</span>.
            </div>
          </div>
        </div>
        <div className="card custom-border border-2">
          <div className="text">
            <div className="icon">
              <PersonSVG />
            </div>
            <div className="title">About myself</div>
            <div className="desc">
              Hello! I'm <span>Rob</span>. I am here to help you leave your customers <span>speechless</span> who will
              come to <span>your site</span>. I am a passionate programming student who <span>3 years ago</span>{" "}
              discovered web development and has been practicing it ever since, <span>improving his skills daily</span>.
            </div>
          </div>
        </div>
        <div className="card custom-border border-3">
          <div className="text">
            <div className="icon">
              <HiringSVG />
            </div>
            <div className="title">Why hire me?</div>
            <div className="desc">
              Well, there are <span>many reasons</span>. The most important thing would be that I have
              <span> patience</span> with the clients and I <span>focus</span> more on what <span>they need</span>. How
              many times has the developer <span>failed</span> to do what the client wants? Another reason would be the{" "}
              <span>perseverance and dedication</span> with which I dedicate myself to a project.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

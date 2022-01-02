import Profile from "../../assets/img/Picture.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <div className="group">
          <div className="title">
            01 <span>About</span>
          </div>
          <div className="line"></div>
        </div>
        <div className="about-img" data-aos="zoom-in-left">
          <img src={Profile} alt="Auto portrait" />
        </div>
        <div className="about-text">
          <div className="card color-1" data-aos="fade-right">
            <div className="title">
              00 <span>What I do?</span>
            </div>
            <div className="desc">
              I create <span>web applications, websites and UX/UI designs</span>. My portfolio contains both{" "}
              <span>static and fullstack</span> sites (including databases and back-end for them) and{" "}
              <span>Android</span> applications based on web technology. I use frameworks like{" "}
              <span>React and Laravel</span>.
            </div>
          </div>
          <div className="card color-2" data-aos="fade-left">
            <div className="title">
              01 <span>About myself</span>
            </div>
            <div className="desc">
              Hello! I'm <span>Rob</span>. I am here to help you leave your customers <span>speechless</span> who will
              come to <span>your site</span>. I am a passionate programming student who <span>3 years ago</span>{" "}
              discovered web development and has been practicing it ever since, <span>improving his skills daily</span>.
            </div>
          </div>
          <div className="card color-3" data-aos="fade-right">
            <div className="title">
              02 <span>Why hire me?</span>
            </div>
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

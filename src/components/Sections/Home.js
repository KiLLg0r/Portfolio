import { ReactComponent as HomeSVG } from "../../assets/svg/portfolio.svg";
import { BiArrowFromTop, BiMailSend } from "react-icons/bi";

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <div className="home-text" data-aos="fade-up-left">
          <h1 className="main-title">
            Hi! I'm Rob, a <span>&lt;WebDev /&gt;</span> !
          </h1>
          <h3 className="secondary-subtitle">
            The internet is gorgeous! But how do we access it? Not through websites?
          </h3>
          <h4 className="main-subtitle">Of course we do and that's why I'm here!</h4>
          <div className="btn-group">
            <a href="#contact" className="cta-btn btn">
              <BiMailSend /> Get in touch
            </a>
            <a href="#about" className="secondary-btn btn">
              <BiArrowFromTop /> More about me
            </a>
          </div>
        </div>
        <div className="home-svg" data-aos="fade-down-right">
          <HomeSVG />
        </div>
      </div>
    </section>
  );
};

export default Home;

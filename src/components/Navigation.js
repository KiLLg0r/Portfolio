import logo from "../assets/svg/logo.svg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);
  var tr;

  open ? (tr = "translateX(0%)") : (tr = "translateX(100%)");
  if (width > 801) tr = "translateX(0%)";

  const updateMenu = () => {
    setOpen((currentOpen) => !currentOpen);
    menuRef.current.setAttribute("aria-expanded", open);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.onresize = updateWidth;
  });

  return (
    <header className="primary-header">
      <img src={logo} alt="logo" className="logo" data-aos={`${width > 801 ? "fade-right" : ""}`} />
      <button className={`menu ${open ? "opened" : ""}`} aria-label="Menu" onClick={updateMenu} ref={menuRef}>
        <svg width="48" height="48" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <nav data-aos={`${width > 801 ? "fade-left" : ""}`}>
        <ul className="primary-navigation" style={{ transform: tr }}>
          <li>
            <a href="#home">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <span aria-hidden="true">01</span>About
            </a>
          </li>
          <li>
            <a href="#projects">
              <span aria-hidden="true">02</span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span aria-hidden="true">03</span>Contact
            </a>
          </li>
          <ul className="secondary-navigation">
            <li>
              <a href="https://github.com/KiLLg0r" target="_blank" rel="noreferrer" className="link-icon">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rob.oblesniuc/" target="_blank" rel="noreferrer" className="link-icon">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/robert-andrei-oblesniuc-42a7281b8/"
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ReactSwitch from "react-switch";
import Me22 from "../../Assets/assets/Me22.png";
import HeaderSocials from "./HeaderSocials";
const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>{" "}
        <div className="Switch">
          <ReactSwitch onChange={toggleTheme} checked={"dark"} />
          <h3>{theme === "light" ? "Dark Mood" : "Light Mood"}</h3>
        </div>
        <h1>Oluwaseun Adeniran</h1>
        <h5>Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me22} alt="" />
        </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

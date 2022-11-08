import React from "react";
import OlwauseunCVCompleted from "../../Assets/assets/cv.pdf";
// import { theme, toggleTheme } from "../../App/ThemeContext";
import ReactSwitch from "react-switch";

const CTA = () => {
  return (
    <div className="cta">
      <a href={OlwauseunCVCompleted} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary ">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;

import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
// import ME from '../../Assets/assets/me-about.jpg'
import Oluwaseun from "../../Assets/assets/Oluwaseun.jpg";
const About = () => {
  return (
    <section id="About">
      <h5 class="sub-head">Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about-me-image">
            <img src={Oluwaseun} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years working Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>10+ completed Projects</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
          </div>

          <p>
            lfhdjhjfhjsddfkklsjgklfjkljskldjfklgdfj
            fjskgjfkjskljdgkjdfgkljdfklgjdklsjkdfjg
            dfkjgkldfjgjksgjdfklgjdkljgklfjgkldfgjd
            <br /> fkg kfjgksdfljgkdfjsgkjdfgkjdfklsgjdfklgjs <br />
            dklg
          </p>
          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react"
import ProfileImg from "../images/marie.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faFilm,
  faGraduationCap,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import Stack from "./stack"
// import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <div>
      <div className="about-img-container">
        <img src={ProfileImg} alt=""></img>
      </div>
      <ul className="main-timeline">
        <li className="timeline" data-date="Spring 2020">
          <h3 className="title">School of Applied Technology</h3>
          <p className="description">
            {`Graduated as a full stack developer from the School of Applied technology (</salt>) in Stockholm.`}
          </p>
        </li>
        <li className="timeline" data-date="2013">
          <h3 className="title">Visual Art &amp; Design</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
            volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor
            felis, eu ultrices elit molestie.
          </p>
        </li>
      </ul>

      <section id="about">
        <h1
          className="section-text"
          data-sal="slide-right"
          data-sal-duration="1500"
          data-sal-easing="easing"
          style={{ textAlign: "center" }}
        >
          About
        </h1>
        <div
          data-sal="slide-right"
          data-sal-duration="2000"
          data-sal-easing="easing"
        >
          <div className="underline" />
        </div>
        <div className="about-content">
          <div className="about-str">
            <FontAwesomeIcon className="icons" icon={faLaptopCode} size="6x" />
            <div className="text-box">
              <h3>{`School of Applied Technology`}</h3>
              <p>2020</p>
              <p>{`Graduated as a full stack developer from the School of Applied technology (</salt>) in Stockholm.`}</p>
            </div>
            <FontAwesomeIcon className="icons" icon={faFilm} size="6x" />
            <div className="text-box">
              <h3>Viaplay</h3>
              <p>2018-2020</p>
              <p>{`After graduating university in 2018, I moved to Stockholm and started working as a Content Coordinator at Viaplay. Here I stayed untill I joined </salt> in 2020.`}</p>
            </div>
            <FontAwesomeIcon
              className="icons"
              icon={faGraduationCap}
              size="6x"
            />
            <div className="text-box">
              <h3>University of Copenhagen</h3>
              <p>2013-2018</p>
              <p>
                Studied at the University of Copenhagen, where I received my
                Bachelor's degree in Communication and IT and my Master's degree
                in Cross-Media Communication.
              </p>
            </div>
          </div>
          <div className="about-me">
            <div className="about-img-container">
              <img src={ProfileImg} alt=""></img>
            </div>
            <div className="about-me-text">
              <p>
                As a lifelong learner I thrive when I am met with challenges and
                the chance to learn something new. I am motivated by creating
                solutions to problems, and believe that the value of a product
                comes from the value it provides for its users.
              </p>
              <p>
                When I'm not programming or learning new things online, I like
                to run, play computergames and cooking. At the moment I'm
                getting in shape for my first half-marathon, which will
                hopefully be this spring.
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mariewinthermadsen"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  className="brand-icon"
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
              <a
                href="https://github.com/Marie-m-prog"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  className="brand-icon"
                  icon={faGithub}
                  size="2x"
                />
              </a>
              <a
                href="mailto:marie.winther@appliedtechnology.se"
                aria-label="email"
              >
                <FontAwesomeIcon
                  className="brand-icon"
                  icon={faEnvelope}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
        <Stack />
      </section>
    </div>
  )
}

export default About

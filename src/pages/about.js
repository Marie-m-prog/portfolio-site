import React from "react"
import "../components/styles.css"
import ProfileImg from "../images/marie.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faFilm, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const About = () => {

  return (
    <div>
      <section id="about">
        <h1 className="section-text" data-sal="slide-right" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>About</h1> 
        <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
          <div className="underline" />
        </div>
        <div className="about-content">
          <div className="about-str">
            <Fade bottom delay={100}>
              <FontAwesomeIcon className="icons" icon={faLaptopCode} size="6x"/>
              <div className="text-box">
                <h3>{`</salt>`}</h3>
                <p>2020</p>
                <p>{`Graduated as a full stack developer from the School of Applied technology (</salt>) in Stockholm.`}</p>
              </div>
            </Fade>
            <Fade bottom delay={100}>
              <FontAwesomeIcon className="icons" icon={faFilm} size="6x"/>
              <div className="text-box">
                <h3>Viaplay</h3>
                <p>2018-2020</p>
                <p>{`After graduating university in 2018, I moved to Stockholm and started working as a Content Coordinator at Viaplay. Here I stayed untill I joined </salt> in 2020.`}</p>
              </div>
            </Fade>
            <Fade bottom delay={100}>
              <FontAwesomeIcon className="icons" icon={faGraduationCap} size="6x"/>
              <div className="text-box">
                <h3>University of Copenhagen</h3>
                <p>2013-2018</p>
                <p>Studied at the University of Copenhagen, where I received my Bachelor's degree in Communication and IT and my Master's degree in Cross-Media Communication.</p>
              </div>
            </Fade>
          </div>
          <div className="about-me">
            <div className="about-img-container">
              <Fade top delay={100}><img src={ProfileImg} alt=""></img></Fade>
            </div>
            <div className="about-me-text">
              <Fade right delay={100}><p>As a lifelong learner I thrive when I am met with challenges and the chance to learn something new. I am motivated by creating solutions to problems, and believe that the value of a product comes from the value it provides for its users.</p></Fade>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
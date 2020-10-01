import React from "react"
import "../components/styles.css"
import ProfileImg from "../images/marie.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faFilm, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faLaptopCode} size="6x"/>
            <div className="text-box">
              <h3>{`</salt>`}</h3>
              <p>2020</p>
              <p>{`Graduated as a full stack developer from the School of Applied technology (</salt>) in Stockholm.`}</p>
            </div>
            <FontAwesomeIcon icon={faFilm} size="6x"/>
            <div className="text-box">
              <h3>Viaplay</h3>
              <p>2018-2020</p>
              <p>{`After graduating university in 2018, I moved to Stockholm and started working as a Content Coordinator at Viaplay. Here I stayed untill I joined </salt> in 2020.`}</p>
            </div>
            <FontAwesomeIcon icon={faGraduationCap} size="6x"/>
            <div className="text-box">
              <h3>University of Copenhagen</h3>
              <p>2013-2018</p>
              <p>Studied at the University of Copenhagen, where I received my Bachelor's degree in Communication and IT and my Master's degree in Cross-Media Communication.</p>
            </div>
          </div>
          <div className="about-me">
            <div className="about-img-container">
              <img src={ProfileImg} alt=""></img>
            </div>
            <div className="about-me-text">
                
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
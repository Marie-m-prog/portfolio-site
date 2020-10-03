import React from "react"
import "../components/styles.css"
import Fade from 'react-reveal/Fade';
import BunnyhopsImg from "../images/bunnyhops.jpg"
import quizImg from "../images/quiz.JPG"
import TodoImg from "../images/vanilla-todo.JPG"

const Portfolio = () => (
  <div>
    <section className="portfolio">
      <h1 className="section-text" data-sal="slide-right" data-sal-delay="3000" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>Portfolio</h1> 
      <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
        <div className="underline" />
      </div>
      <div className="portfolio-container">
        <Fade bottom delay={100}>
        <div className="portfolio-item">
          <img className="portfolio-item-image bunnyhops" alt="" src={BunnyhopsImg}></img>
          <div className="portfolio-item-text">
            <h1>Bunny Hops</h1>
            <p>Website created with Gatsby connected to Contentful CMS.</p>
          </div>
          <div className="hide">
            <div className="hidden-content">
              <h1>Bunny Hops</h1>
              <p>Gatsby / React / JavaScript / Contentful</p>
              <a href="https://bunnyhops.se" target="_blank" rel="noreferrer">View Demo</a>
              <a href="https://github.com/Marie-m-prog/bunny-hops" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        </Fade>
        <Fade bottom delay={200}>
        <div className="portfolio-item">
          <img className="portfolio-item-image quiz" alt="" src={quizImg}></img>
          <div className="portfolio-item-text">
            <h1>{`</salt> Quiz`}</h1>
            <p>Small React application created as a one-day project</p>
          </div>
          <div className="hide">
            <div className="hidden-content">
              <h1>{`</salt> Quiz`}</h1>
              <p>React / JavaScript / Express / Node.js</p>
              <a href="https://hackday-quiz.herokuapp.com/" target="_blank" rel="noreferrer">View Demo</a>
              <a href="https://github.com/Marie-m-prog/Hackday" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        </Fade>
        <Fade bottom delay={300}>
        <div className="portfolio-item">
          <img className="portfolio-item-image vanilla-todo" alt="" src={TodoImg}></img>
          <div className="portfolio-item-text">
            <h1>Vanilla Todo-list</h1>
            <p>A single page application created with vanilla JavaScript</p>
          </div>
          <div className="hide">
            <div className="hidden-content">
              <h1>Vanilla Todo-list</h1>
              <p>JavaScript / Node.js</p>
              <a href="https://clever-murdock-c4f1e4.netlify.app/" target="_blank" rel="noreferrer">View Demo</a>
              <a href="https://github.com/Marie-m-prog/Vanilla-JS-Todo" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  </div>
)

export default Portfolio

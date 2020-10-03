import React from "react"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../pages/about"
import Portfolio from "../pages/portfolio"
import Contact from "../pages/contact"
import Footer from "../components/footer"
import "../components/styles.css"
import LandingImg from "../images/photoholgic-unsplash.jpg"

const IndexPage = () => {
  let title = "Hello, my name is Marie";

  return (
  <div>
    <SEO title="Home" />
    <section id="landing">
      <img alt="" src={LandingImg}></img>
      <Header />
        <div className="title-text">
          <h1>
            <span>
              {title.split("").map((char, index) => {
                return (
                  <Fade top cascade delay={index*40}><span key={index}>{char}</span></Fade>
                )
              })}
            </span>
          </h1>
          <p>{`I’m a full-stack developer graduated from </salt> specialized in Javascript.`}</p>
        </div>
    </section>
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
)}

export default IndexPage

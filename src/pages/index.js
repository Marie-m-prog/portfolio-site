import React from "react"
import { Helmet } from "react-helmet"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from "../components/footer"
import "../components/styles.scss"
import LandingImg from "../images/cool-background.png"
import PreviewImg from "../images/site-preview.jpg"
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
  return (
      <div>
        <SEO title="Home" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Marie's Portfolio Site</title>
          <link rel="canonical" href="https://mariewmadsen.netlify.app" />
          <meta property="og:image" content={PreviewImg} />
        </Helmet>
          <section id="landing">
            <img alt="" src={LandingImg}></img>
            <Header />
            <div className="landing-container">
              <div className="title-text">
                <Fade top delay={1000}><h1>Hello, my name is Marie</h1></Fade>
                <p>{`I’m a fullstack developer graduated from </salt> specialized in JavaScript.`}</p>
                <Link
                  activeClass="active"
                  className="main-btn"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >View Portfolio<FontAwesomeIcon className="main-btn-arrow" icon={faAngleRight} /></Link>
              </div>
            </div>
          </section>
          <About />
          <Portfolio />
          <Contact />
          <Footer />
    </div>
)}

export default IndexPage

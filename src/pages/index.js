import React from "react"
import { Helmet } from "react-helmet"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../pages/about"
import Portfolio from "../pages/portfolio"
import Contact from "../pages/contact"
import Footer from "../components/footer"
import "../components/styles.scss"
import LandingImg from "../images/photoholgic-unsplash.jpg"
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
          <link rel="canonical" href="http://mariewmadsen.netlify.app" />
          <meta property="og:image" content={PreviewImg} />
        </Helmet>
          <section id="landing">
            <img alt="" src={LandingImg}></img>
            <Header />
            <div className="title-text">
              <Fade cascade top delay={1000}><h1>Hello, my name is Marie</h1></Fade>
              <p>{`I’m a full-stack developer graduated from </salt> specialized in Javascript.`}</p>
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
          </section>
          <About />
          <Portfolio />
          <Contact />
          <Footer />
    </div>
)}

export default IndexPage

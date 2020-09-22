import React, { useEffect, useRef } from "react"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import Header from "../components/header"
import "../components/styles.css"

const IndexPage = () => {
  let title = "Hello, my name is Marie";


  return (
  <div>
    <SEO title="Home" />
    <section className="landing">
      <Header />
        <div className="title-text">
          <h1>
            <span>
              {title.split("").map((char, index) => {
                return (
                  <Fade top cascade delay={index*10}><span key={index}>{char}</span></Fade>
                )
              })}
            </span>
          </h1>
          <p>{`I’m a full-stack developer graduated from </salt> specialized in Javascript.`}</p>
        </div>
    </section>
    <div className="slider"></div>
  </div>
)}

export default IndexPage

import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import "../components/styles.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <section className="landing">
      <Header />
      <h1>Hello, my name is Marie</h1>
      <p>{`I’m a full-stack developer graduated from </salt> specialized in Javascript.`}</p>
    </section>
    <div className="intro">
      <div className="intro-text">
        <h1 className="hide">
          <span className="text">Creating innovation</span>
        </h1>
      </div>
    </div>
    <div className="slider"></div>
  </div>
)

export default IndexPage

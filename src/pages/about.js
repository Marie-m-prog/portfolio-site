import React from "react"
import "../components/styles.css"

const About = () => {
  return (
    <div>
      <section id="about">
        <h1 className="section-text" data-sal="slide-right" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>About</h1> 
        <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
          <div className="underline" />
        </div>
      </section>
    </div>
  )
}

export default About
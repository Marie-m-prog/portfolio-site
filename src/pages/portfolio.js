import React from "react"
import "../components/styles.css"

const Portfolio = () => (
  <div>
    <section className="portfolio">
      <h1 className="section-text" data-sal="slide-right" data-sal-delay="3000" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>Portfolio</h1> 
      <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
        <div className="underline" />
      </div>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <div className="portfolio-item-image bunnyhops"></div>
          <div className="portfolio-item-text">
            <h1>Bunny Hops</h1>
            <p></p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-image quiz"></div>
          <div className="portfolio-item-text">
            <h1>{`</salt> Quiz`}</h1>
            <p></p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-image vanilla-todo"></div>
          <div className="portfolio-item-text">
            <h1>Vanilla Todo-list</h1>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Portfolio

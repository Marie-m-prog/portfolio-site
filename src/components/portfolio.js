import React from "react"
import { StaticQuery, graphql } from "gatsby";
import ProjectPreview from "./project-preview"

const Portfolio = () => {

  return (
  <div>
    <section className="portfolio">
      <h1 className="section-text" data-sal="slide-right" data-sal-delay="3000" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>Portfolio</h1> 
      <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
        <div className="underline" />
      </div>
      <StaticQuery
        query={graphql`
          query PortfolioItemsQuery {
            allPreviewsDataJson {
              edges {
                node {
                  id
                  title
                  description
                  stack
                  url
                  repo
                }
              }
            }
          }
        `
        }
        render={data => {
          return (
            <div className="portfolio-container">
              {data.allPreviewsDataJson.edges.map(node => {
                return <ProjectPreview node={node}/>
              })}
            </div>
          )
        }}
      />
      
    </section>
  </div>
)}

export default Portfolio

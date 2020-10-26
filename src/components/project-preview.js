import React from "react"
import Fade from 'react-reveal/Fade';
import BunnyhopsImg from "../images/bunnyhops.jpg"
import QuizImg from "../images/quiz.jpg"
import TodoImg from "../images/vanilla-todo.jpg"
import DogsearchImg from "../images/dogsearch.jpg"
import WastrImg from "../images/wastr.png"

const ProjectPreview = (props) => {
  const imageList = [DogsearchImg, BunnyhopsImg, QuizImg, WastrImg, TodoImg];
  console.log(props)
  const {id, delay, title, description, stack, url, repo } = props.node.node;

  return (
  <Fade bottom delay={delay}>
    <div className="portfolio-item">
      <img className={`portfolio-item-image`} alt="" src={imageList[id-1]}></img>
      <div className="portfolio-item-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="hide">
        <div className="hidden-content">
          <h1>{title}</h1>
          <p>{stack}</p>
          {url ? <a href={url} target="_blank" rel="noreferrer">View Demo</a> : ""}
          <a href={repo} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </Fade>
)}

export default ProjectPreview

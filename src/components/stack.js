import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import JavaScriptIcon from "../images/javascript.svg" 
import JQueryIcon from "../images/jquery.svg" 
import CSSIcon from "../images/css.svg" 
import SASSIcon from "../images/sass.svg" 
import BootstrapIcon from "../images/bootstrap.svg" 
import MaterialIcon from "../images/material-ui.svg" 
import TailwindIcon from "../images/tailwind.svg" 
import ExpressIcon from "../images/express.svg" 
import MongoIcon from "../images/mongodb.svg" 
import PostgreSQLIcon from "../images/postgresql.svg" 
import GraphQLIcon from "../images/graphql.svg" 
import GitIcon from "../images/git.svg" 
import VisualStudioIcon from "../images/visual-studio.svg"
import WebpackIcon from "../images/webpack.svg"
import DockerIcon from "../images/docker.svg" 
import JestIcon from "../images/jest.svg" 
import MochaIcon from "../images/mocha.svg" 
import ReduxIcon from "../images/redux.svg" 
import GatsbyIcon from "../images/gatsby.svg" 

const Stack = () => {
  return (
    <section>
      <div className="stack">
        <div className="stack-col">
          <h2>JavaScript</h2>
          <div>
            <img src={JavaScriptIcon} alt="" style={{height: "75px", width: "75px"}}></img>
            <p>JavaScript</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} style={{color: "#5adafd"}} size="6x"/>
            <p>React</p>
          </div>
          <div>
            <img src={ReduxIcon} alt="" style={{height: "75px", width: "75px"}}></img>
            <p>Redux</p>
          </div>
          <div>
            <img src={GatsbyIcon} alt="" style={{height: "75px", width: "75px"}}></img>
            <p>Gatbsy</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faNode} style={{color: "#82c91e"}} size="6x"/>
          </div>
          <div>
            <img src={JQueryIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
        </div>
        <div className="stack-col">
          <h2>CSS</h2>
          <div>
            <img src={CSSIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
          <div>
            <img src={SASSIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
          <div>
            <img src={BootstrapIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={MaterialIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>Material-UI</p>
          </div>
          <div>
            <img src={TailwindIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="stack-col">
          <h2>Backend</h2>
          <div>
            <img src={ExpressIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
          <div>
            <img src={MongoIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
          <div>
            <img src={PostgreSQLIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>PostgreSQL</p>
          </div>
          <div>
            <img src={GraphQLIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>GraphQL</p>
          </div>
        </div>
        <div className="stack-col">
          <h2>Tools</h2>
          <div>
            <img src={GitIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>Git</p>
          </div>
          <div>
            <img src={VisualStudioIcon} alt="" style={{height: "75px", width: "75px"}}></img>
            <p>Visual Studio Code</p>
          </div>
          <div>
            <img src={WebpackIcon} alt="" style={{height: "75px", width: "75px"}}></img>
            <p>Webpack</p>
          </div>
          <div>
            <img src={DockerIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
          <div>
            <img src={JestIcon} alt="" style={{height: "100px", width: "100px"}}></img>
            <p>Jest</p>
          </div>
          <div>
            <img src={MochaIcon} alt="" style={{height: "100px", width: "100px"}}></img>
          </div>
        </div>
      </div>
  </section>
)}

export default Stack
import PropTypes from "prop-types"
import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => (
  <header>
    <nav className="nav">
      <ul>
        <div className="nav-links">
          
          <li className="nav-link">
            <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Home</Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About</Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfolio</Link>
          </li>
          <li className="nav-link">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link>
          </li>
          
        </div>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

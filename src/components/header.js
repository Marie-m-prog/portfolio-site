import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
  <header>
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-text">
        <h1>Marie W. Madsen</h1>
        <p>Fullstack Javascript Developer</p>
      </div>
      <ul className="nav-links">
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
      </ul>
    </nav>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

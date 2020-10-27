import React from "react"
import Fade from 'react-reveal/Fade';

const Contact = () => (
  <div>
    <section id="contact">
      <h1 className="section-text" data-sal="slide-right" data-sal-delay="3000" data-sal-duration="1500" data-sal-easing="easing" style={{textAlign: 'center'}}>Contact</h1> 
      <div data-sal="slide-right" data-sal-duration="2000" data-sal-easing="easing">
            <div className="underline" />
      </div>
      <div className="contact-form">
        <Fade top><h3>Want to get in touch?</h3></Fade>
        <form name="contact" method="POST" data-netlify="true" autoComplete="off" action="/contact-success">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <Fade top><input required type="text" name="name" placeholder="Name"/></Fade>  
          </p>
          <p>
            <Fade top><input required type="email" name="email" placeholder="Email Address"/></Fade>
          </p>
          <p>
            <Fade top><textarea required name="message" placeholder="Message"></textarea></Fade>
          </p>
            <Fade top><button type="submit">Send</button></Fade>
        </form>
      </div>
    </section>
  </div>
)

export default Contact
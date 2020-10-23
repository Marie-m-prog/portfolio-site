import React from "react"
import MessageReceived from "../images/undraw_Popular_re_mlfe.svg"

const ContactSuccess = () => (
  <section className="contact-success">
    <img style={{width: "400px", height: "400px"}} src={MessageReceived} alt=""></img>
    <h1>Thank you for your message!</h1>
    <p>Your message has been sent, and I'll get back to you shortly.</p>
    <a href="/">Back to Homepage</a>
  </section>
)

export default ContactSuccess
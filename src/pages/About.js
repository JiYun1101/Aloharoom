import { Link } from "react-router-dom";
import "../style/About.css";
import React from "react";
import ReactDOM from "react-dom";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        We are a company that provides high-quality services to our clients.
      </p>
      <p>
        Our team consists of experienced professionals who are passionate about
        their work and are committed to delivering exceptional results.
      </p>
      <p>
        At our company, we believe in building long-term relationships with our
        clients based on trust and mutual respect. We work closely with each
        client to understand their unique needs and develop customized solutions
        that meet their specific requirements.
      </p>
      <p>
        Thank you for considering our company for your business needs. We look
        forward to working with you!
      </p>
    </div>
  );
}

ReactDOM.render(<About />, document.getElementById("root"));
export default About;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Laksheya Pal </span>
            from <span className="purple"> Moradabad, India.</span>
            <br /> A dedicated <span className="purple">Full Stack Developer</span>  with hands-on experience. I’m passionate about staying updated
            with industry trends and technologies.
            <br />
            I have previously worked as <span className="purple">Full Stack Developer Intern</span> at <span className="purple">Xingoda</span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Laksheya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

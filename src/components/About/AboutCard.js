import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritesh Gupta </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am currently in my Final Year of Electrical Engineering B.Tech
            Course at <br />
            IIT Roorkee.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems and Stories.
            </li>
            <li className="about-activity">
              <ImPointRight /> & obviously Binge watching web series.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

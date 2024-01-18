import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 Imagine if you could wield a superpower to craft greatness and
              tackle any challenge head-on. That's how I see programming.
              <br />
              <br />I am fluent in Languages like
              <i>
                <b className="purple"> C , C++, Javascript and SQL. </b>
              </i>
              <br />
              <br />
              My field of Interest's lie in &nbsp;
              <i>
                <b className="purple">
                  Full Stack Web Development, Data Structure and Algo
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Deep Learning .</b>
              </i>
              <br />
              <br />
              💡 The real magic in programming ? <br />
              Solving problems every day, especially related to data structures
              and algorithms. I love using{" "}
              <i>
                <b className="purple">C++</b>
              </i>{" "}
              for this—it's like my secret weapon.
              <br /> It's not just about coding; it's about thinking hard and
              getting better every time 🚀.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Riteshgupta2906"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritesh-k-gupta-a44525213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rkg_ritesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

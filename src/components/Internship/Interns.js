import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import InternCard from "./InternCard";
import samsung from "../../Assets/Projects/samsung.png";
import eed from "../../Assets/Projects/eedIITR.png";

function Intern() {
  return (
    <Container fluid className="">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Internships </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <InternCard
              imgPath={samsung}
              isBlog={false}
              title="Samsung R&D Institute Bengaluru"
              description="During my Magpie internship, I experienced continuous learning and engaging problem-solving opportunities. Guided by my mentor, I tackled a unique challenge involving machine learning techniques for point cloud geometry compression in an AR-VR application. My significant contribution included developing and optimizing quantization algorithms for Point Cloud Compression (PCC), resulting in a remarkable 40% reduction in file size and a 25% improvement in transmission speed. Despite encountering various challenges, I overcame each one with persistence and effort. The Software Carpentry (SWC) sessions provided valuable insights into data structures and algorithms, complementing my hands-on experiences. The campus immersion program, with its immersive activities and enriching learning sessions, was the highlight of this unforgettable internship journey, fostering both professional and personal growth."
              time="May 2023 - July 2023"
              certificate="https://drive.google.com/file/d/145hIxAP6HbdOLd5rk9qYVUBqw9q5B7RK/view?usp=sharing"
            />
          </Col>

          <Col md={5} className="project-card">
            <InternCard
              imgPath={eed}
              isBlog={false}
              title="EED Lab IIT Roorkee"
              description=" 
              During my summer internship in my second year, I delved into the exciting intersection of machine learning and game theory. The focus of my work was the development of a novel data-driven pricing method for sharing rooftop photovoltaic (PV) generation within an electrically interconnected residential building cluster. The project employed leader-follower Stackelberg game theory to model energy storage dynamics in this interconnected system. A key component of the internship involved the implementation of an LSTM (Long Short-Term Memory) network to predict future PV trends, adding a predictive dimension to the innovative pricing approach. This experience not only provided me with valuable insights into the practical applications of machine learning and game theory."
              time="May 2022 - July 2022"
              certificate="https://drive.google.com/file/d/1FNzwrtC19yd6UibxC1el83yaEZRKg2rV/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Intern;

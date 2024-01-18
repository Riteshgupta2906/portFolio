import React from "react";

import "./Education.css";
import EducationCard from "./EducationCard";
import eduImage from "../../Assets/eduOrange.svg";
import { Row, Col } from "react-bootstrap";
const educationData = [
  {
    id: 1,
    institution: "Indian Institute Of Technology Roorkee",
    course: "Bachelor of Technology ",
    startYear: "2020",
    endYear: "Present",
    marks: "GPA : 7.78/10",
  },
  {
    id: 2,
    institution: "Jawahar Navodaya Vidyalaya ,Kottayam  ",
    course: "Intermediate (Class XII)",
    startYear: "2017",
    endYear: "2019",
    marks: "Percentage : 93.2 %",
  },
  {
    id: 1,
    institution: "Jawahar Navodaya Vidyalaya ,Banswara ",
    course: "Matriculate (Class X)",
    startYear: "2015",
    endYear: "2017",
    marks: "CGPA : 10/10",
  },
];

function Education() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <div className="education-description">
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
              mark={edu.marks}
            />
          ))}
        </div>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "0px", paddingBottom: "50px" }}
        className="about-img"
      >
        <div className="education-image">
          <img src={eduImage} className="img-fluid" alt="" />
        </div>
      </Col>
    </Row>
  );
}
export default Education;

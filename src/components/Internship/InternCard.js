import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Projects/ProjectCard.css";
import { CgFileDocument } from "react-icons/cg";
function InternCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedDescription = isExpanded
    ? props.description
    : `${props.description.slice(0, 150)}...`;
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "800" }}>{props.title}</Card.Title>
        <Card.Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            marginTop: "1.5rem",
          }}
        >
          <p className="purple">{props.time}</p>
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {truncatedDescription}
          {props.description.length > 150 && (
            <button className="truncateBtn" onClick={toggleDescription}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </Card.Text>
        <Button
          variant="primary"
          href={props.certificate}
          target="_blank"
          style={{ marginLeft: "10px", marginTop: "15px" }}
        >
          <CgFileDocument style={{ marginBottom: "2px" }} /> Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}
export default InternCard;

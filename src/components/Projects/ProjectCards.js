import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

function ProjectCards(props) {
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
        <Card.Text style={{ textAlign: "justify" }}>
          {truncatedDescription}
          {props.description.length > 150 && (
            <button className="truncateBtn" onClick={toggleDescription}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </Card.Text>
        <h5 className="skill">Skill Used </h5>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.skillUsed}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

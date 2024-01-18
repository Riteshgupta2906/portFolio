import React from "react";
import { Fade } from "react-awesome-reveal";

import eduImgWhite from "../../Assets/eduImgWhite.svg";
import "./Education.css";

function EducationCard({ id, institution, course, startYear, endYear, mark }) {
  return (
    <div style={{ width: "80%" }}>
      <Fade bottom>
        <div key={id} className="education-card" style={{ width: "90%" }}>
          <div className="educard-img">
            <img src={eduImgWhite} alt="" />
          </div>
          <div class="education-details">
            <h6 style={{ fontWeight: "800", color: "#7143ff" }}>
              {" "}
              {startYear}-{endYear}
            </h6>
            <h4>{course}</h4>
            <h5>{institution}</h5>
            <h5>{mark}</h5>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default EducationCard;

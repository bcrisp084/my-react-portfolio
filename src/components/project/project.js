import React from "react";
import "./project.css";



const Project = ({ thumbnail, altText, liveLink, sourceCode }) => {
    return(
    <div className="col-lg-6 mt-4 color">
    <a href={liveLink} target="_blank" rel="noreferrer">
    <img
      src={thumbnail}
      alt={altText}
      height="350"
      width="350"
    />
  </a>
  <div className="projectLinks">
    <a
      href={sourceCode}
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      View the code
    </a>
    <a
      href={liveLink}
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Deployed Live
    </a>
  </div>
</div>
    );
};
export default Project;

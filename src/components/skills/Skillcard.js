import React from "react";

import "./SkillCard.css";

const SkillCard = ({ docLink, icons, name }) => {
  return (
    <a href={docLink} target="_blank" rel="noreferrer">
      <div
        className="card m-lg-2 m-1 p-lg-3 p-md-2 p-sm-2"
        style={{ maxWidth: "12rem" }}
      >
        <div className="card-body">
          <div
            className="icons text-center text-decoration-none "
            style={{ fontSize: "3rem", padding: "0.5rem" }}
          >
            {icons}
          </div>
          {name}
        </div>
      </div>
    </a>
  );
};

export default SkillCard;

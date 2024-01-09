import React from "react";
import SkillCard from "./Skillcard";
import "./TabPanel.css";
import { Margin } from "@mui/icons-material";
import { info } from "../../info/Info";

const SkillSection = ({ title, skills }) => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <h4
          className="panelText"
          style={{
            marginLeft: "2rem",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h4>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            docLink={skill.docLink}
            icons={skill.icons}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SkillSection;

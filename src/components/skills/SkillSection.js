import React from "react";
import SkillCard from "./Skillcard";
import "./TabPanel.css";
import { Margin } from "@mui/icons-material";

const SkillSection = ({ title, skills }) => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <h4 className="panelText" style={{ marginLeft: "2rem" }}>
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

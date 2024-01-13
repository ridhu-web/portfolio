import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material-next/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const skillCategories = [
  {
    heading: "FrontEnd/Client-Side Skills",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "ReactJS",
      "d3.js",
      "vega-lite",
      "Material UI",
    ],
  },
  {
    heading: "Server-Side/BackEnd Skills",
    skills: [".NET", "Java", "Spring Boot", "Node.js", "Flask", "Express.js"],
  },
  {
    heading: "Databases",
    skills: ["MySQL", "Postgres", "MongoDB", "Hadoop"],
  },
  {
    heading: "Programming Languages",
    skills: [
      "C#",
      "Java",
      "JavaScript",
      "C",
      "C++",
      "TypeScript",
      "Scala",
      "Python",
      "Ruby",
      "GoLang",
      "MATLAB",
    ],
  },
  {
    heading: "DevOps",
    skills: ["Docker", "Kubernetes", "Ansible", "Jenkins", "AWS S3"],
  },
  {
    heading: "Tools and CLI",
    skills: [
      "Git",
      "Jira",
      "Linux",
      "Windows",
      "Redux tools",
      "Shell Scripting",
    ],
  },
  {
    heading: "Mobile App Development",
    skills: ["Flutter", "Android Studio"],
  },
];

// ButtonGroup Component
const CustomButtonGroup = ({ buttons }) => (
  <Grid item xs={6}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {buttons.map((buttonText, index) => (
        <Button key={index}>{buttonText}</Button>
      ))}
    </ButtonGroup>
  </Grid>
);

const Row = ({ headingText, buttons }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "16px",
    }}
  >
    <h2 style={{ margin: 0, width: "30%", fontSize: "auto" }}>{headingText}</h2>
    <CustomButtonGroup buttons={buttons} />
  </div>
);

// Main Component
const MyComponent = () => {
  return (
    <div style={{ margin: "auto 15%" }}>
      <Typography
        variant="h4"
        component="div"
        style={{ maxWidth: "800px", padding: "20px" }}
        gutterBottom
      >
        As a passionate and versatile developer, I enjoy exploring new
        technologies and frameworks to create cutting-edge applications.
      </Typography>
      {skillCategories.map((category, index) => (
        <Row
          key={index}
          headingText={category.heading}
          buttons={category.skills}
        />
      ))}
    </div>
  );
};

export default MyComponent;

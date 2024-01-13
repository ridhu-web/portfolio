import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CardMedia from "@mui/material/CardMedia";

import experiences from "./ExperienceInfo";

export default function CustomizedTimeline(props) {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };
  return (
    <Timeline position="alternate">
      {experiences.map((experience, index) => (
        <TimelineItem key={index}>
          {" "}
          {/* Assuming each experience has a unique id */}
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            fontSize="20px"
          >
            {experience.timePeriod}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Card
              style={{
                maxWidth: "600px",
                backgroundColor: "white",
                color: "#1f1f1f",
                marginLeft: index % 2 ? "auto" : 0,
                marginRight: index % 2 ? 0 : "auto",
                textAlign: "left",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                backgroundColor="white"
                image={experience.imageUrl}
                alt={`Image of ${experience.companyName}`}
              />
              <CardContent>
                {/* Replace this with company logo */}
                <Typography variant="h5">{experience.companyName}</Typography>
                <Typography variant="h6">{experience.position}</Typography>
              </CardContent>

              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  {experience.summary.map((point, idx) => (
                    <Typography key={idx} variant="subtitle1">
                      {point}
                    </Typography>
                  ))}
                </CardContent>
              </Collapse>

              <CardActions disableSpacing>
                <IconButton
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  color="inherit"
                >
                  {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </CardActions>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

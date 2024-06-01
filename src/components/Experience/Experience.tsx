import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses }  from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const workExperiences = [
  {
    period: 'September 2023 - Present',
    company: 'University of Illinois at Chicago',
    position: 'Graduate Assistant',
    tasks: [

        'Developing a full-stack visualization tool using React.js, Flask, and AWS DynamoDB empowering researchers to analyze extensive datasets of over 200 patients across more than 50 attributes.',
        'Led CS 424 (Grad Course) on Data Visualization and Analytics and CS 112 (UG Course) Program Design, conducting labs, office hours, and grading assignments.',
        'Skills: React.js, Javascript, D3.js, Python, Flask, AWS'
    ],
  },
  {
    period: 'May 2023 - Aug 2023',
    company: 'Regions Bank, Hoover, Alabama',
    position: 'Software Engineering Intern',
    tasks: [
        'Accelerated the transition of 88% of on-demand services from a monolithic architecture to a REST-based microservices structure, leveraging C# and .NET within the MVC architectural pattern, against a target of just 20%.',
        'Improved the maintenance Index from an average of 60 to 80 through coding enhancements.',
        'Skills: C#, .NET Core, ASP.NET, SQL, NoSQL, MVC Architecture, Microservices, Azure'
    ],
  },
  {
    period: 'Jan 2020 - April 2022',
    company: 'Hewlett Packard Enterprise, Bengaluru, India',
    position: 'Software Engineer I',
    tasks: [
        'Developed 20+ Python and Java-based scripts in Linux/Windows environments to establish and validate the various infrastructure variants of HPE GreenLake incorporating DevOps and cloud concepts.',
        'Created ’S-Reset’, utilizing REST API, to reset private cloud configurations to factory defaults in 3 minutes, significantly reducing the processing time from 6 hours.',
        'Engineered deployment scripts for Hadoop, DRBD, and k8s clusters, which helped in setting up HPE Ezmeral Container Platform integrating Docker and Kubernetes to optimize private cloud infrastructures.',
        'Engineered the processing of 240GB of data in a Hadoop cluster with Apache Spark and MAPR Hadoop Cluster, enhancing data handling and Developed a random forest model for fraud detection, aiding in server benchmarking efforts.',
        'Collaborated and communicated with 5+ cross-functional teams to align software development efforts with organizational goals and resolved over 50 defects using Python and Java.',
        'Skills: Python, Java, Scala, Eclipse, Networking, Operating Systems, REST API'
    ],
  }

];

export default function WorkExperienceTimeline() {
  return (
    <div id='Experience'>
    <Typography variant="h3" component="div" style={{marginTop: '18px'}}>Work Experience</Typography>
    <Timeline
    sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {workExperiences.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < workExperiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h3" component="span">
              {experience.period}
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div>
  <Typography variant="h3" component="div">{experience.company}</Typography>
  <Typography variant="h4" component="div" style={{ marginTop: '8px' }}>{experience.position}</Typography>
</div>

              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" component={'span'}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    {experience.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} style={{ marginBottom: '8px' }}>{task}</li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </div>
  );
}

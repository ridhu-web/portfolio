// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import uic from "../../img/uic.png";
// import regions from "../../img/regions-bank.png";
// import hpe from "../../img/hpe.png";
// export default function Experience() {
//   return (
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date="September 2023 - December 2023"
//         icon={<img src={uic} />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Software Engineering Intern
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Birmingham, AL</h4>
//         <p>C#, .NET, ASP.NET, Azure, SQL.</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="May 2023 - August 2023"
//         iconStyle={{
//           background: "#fff",
//           color: "#fff",
//           borderRadius: "0",
//           height: "auto",
//           boxShadow: "none",
//           WebkitBoxShadow: "none",
//         }}
//         icon={<img src={regions} />}
//       >
//         <h3 className="vertical-timeline-element-title">Art Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, SEO, Online
//           Marketing
//         </p>
//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="Jan 2020 - April 2022"
//         iconStyle={{
//           background: "#fff",
//           color: "#fff",
//           borderRadius: "0",
//           height: "auto",
//           boxShadow: "none",
//           WebkitBoxShadow: "none",
//         }}
//         icon={<img src={hpe} style={{ width: "auto", height: "auto" }} />}
//       >
//         <h3 className="vertical-timeline-element-title">Art Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, SEO, Online
//           Marketing
//         </p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//   );
// }

// import React from "react";
// import "./Experience.css"; // Make sure to create this CSS file
// import uic from "../../img/uic.png";
// import regions from "../../img/regions-bank.png";
// import hpe from "../../img/hpe.png";

// import { VerticalTimeline } from "react-vertical-timeline-component";

// const ExperienceCard = ({ logo, role, company, period, tools, summary }) => {
//   return (
//     <div className="experience-card">
//       <img src={logo} alt={`${company} logo`} className="experience-logo" />
//       <div className="experience-info">
//         <h3>{role}</h3>
//         <h4>{company}</h4>
//         <p>{period}</p>
//         <p>{tools}</p>
//         <p>{summary}</p>
//       </div>
//     </div>
//   );
// };

// const Experience = () => {
//   return (
//     <VerticalTimeline>
//       <div className="experience-container">
//         <ExperienceCard
//           logo={uic} // Replace with actual image paths
//           role="Software Engineering Intern"
//           company="UIC"
//           period="September 2023 - December 2023"
//           tools="C#, .NET, ASP.NET, Azure, SQL"
//           summary="Your summary here"
//         />

//         <ExperienceCard
//           logo={regions} // Replace with actual image paths
//           role="Software Engineering Intern"
//           company="UIC"
//           period="September 2023 - December 2023"
//           tools="C#, .NET, ASP.NET, Azure, SQL"
//           summary="Your summary here"
//         />

//         <ExperienceCard
//           logo={hpe} // Replace with actual image paths
//           role="Software Engineering Intern"
//           company="UIC"
//           period="September 2023 - December 2023"
//           tools="C#, .NET, ASP.NET, Azure, SQL"
//           summary="Your summary here"
//         />
//         {/* Repeat for other experience cards */}
//       </div>
//     </VerticalTimeline>
//   );
// };

// export default Experience;

import React from "react";
import "./Experience.css"; // Make sure to create and update this CSS file
import uic from "../../img/uic.png";
import regions from "../../img/regions-bank.png";
import hpe from "../../img/hpe.png";

const ExperienceCard = ({ logo, role, company, period, tools, summary }) => {
  return (
    <div className="experience-card">
      <img src={logo} alt={`${company} logo`} className="experience-logo" />
      <div className="experience-content">
        <h2>{role}</h2>
        <h3>{company}</h3>
        <h3>{period}</h3>
        <h3>
          {"Skills : "}
          {tools}
        </h3>

        <h3>{summary}</h3>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="experience-container">
      <ExperienceCard
        logo={uic}
        role="Graduate Teaching Assistant"
        company="University of Illinois at Chicago"
        period="September 2023 - December 2023"
        tools="Python, D3.js, React, HTML, CSS, Altair, Vega-lite"
        summary="Worked as gratuate TA for the courses Visualization and Visual Data Analytics and Program Design I where I conducted lab sessions and office hours to clear doubts and graded assignments. "
      />
      <ExperienceCard
        logo={regions}
        role="Software Engineering Intern"
        company="Regions Bank, Birmingham, AL"
        period="September 2023 - December 2023"
        tools="C#, .NET, ASP.NET, Azure, SQL"
        summary="Leveraged .NET 6 and C#9 to transition 10 RESTful API controllers from monolithic to microservices architecture, enhancing API responsiveness, and optimized SQL procedures and source code, boosting code efficiency and maintenance index from 60 to 80."
      />
      <ExperienceCard
        logo={hpe}
        role="Software Engineering Intern"
        company="Hewlett Packard Enterprise, Bengaluru, India"
        period="September 2023 - December 2023"
        tools="C#, .NET, ASP.NET, Azure, SQL"
        summary="Developed and automated cloud and DevOps solutions, significantly enhancing cloud configurations, server management, and real-time monitoring across complex architectures, while effectively debugging and deploying using technologies like Python, Java, Ansible, and Jenkins."
      />
      {/* Add other ExperienceCard components here */}
    </div>
  );
}

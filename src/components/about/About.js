// import React, { useState } from "react";
// import Style from "./About.module.scss";
// import Terminal from "./Terminal";
// import { Box, IconButton } from "@mui/material";
// import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import arrow icons
// import { info } from "../../info/Info";

// export default function About() {
//   const firstName = info.firstName.toLowerCase();

//   const [currentSection, setCurrentSection] = useState(0);

//   const sections = [
//     { name: "About Me", text: aboutMeText() },
//     { name: "Skills", text: skillsText() },
//     { name: "Hobbies/Interests", text: miscText() },
//   ];

//   function aboutMeText() {
//     return (
//       <>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             {firstName}
//             {info.lastName.toLowerCase()} $
//           </span>{" "}
//           cat about{firstName}{" "}
//         </p>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             about{firstName} <span className={Style.green}>(main)</span> ${" "}
//           </span>
//           {info.bio}
//         </p>
//       </>
//     );
//   }

//   function skillsText() {
//     return (
//       <>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             {firstName}
//             {info.lastName.toLowerCase()} $
//           </span>{" "}
//           cd skills/tools
//         </p>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             skills/tools <span className={Style.green}>(main)</span> $
//           </span>{" "}
//           ls
//         </p>
//         <p style={{ color: info.baseColor }}> Proficient With</p>
//         <ul className={Style.skills}>
//           {info.skills.proficientWith.map((proficiency, index) => (
//             <li key={index}>{proficiency}</li>
//           ))}
//         </ul>
//         <p style={{ color: info.baseColor }}> Exposed To</p>
//         <ul className={Style.skills}>
//           {info.skills.exposedTo.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }

//   function miscText() {
//     return (
//       <>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             {firstName}
//             {info.lastName.toLowerCase()} $
//           </span>{" "}
//           cd hobbies/interests
//         </p>
//         <p>
//           <span style={{ color: info.baseColor }}>
//             hobbies/interests <span className={Style.green}>(main)</span> $
//           </span>{" "}
//           ls
//         </p>
//         <ul>
//           {info.hobbies.map((hobby, index) => (
//             <li key={index}>
//               <Box component={"span"} mr={"1rem"}>
//                 {hobby.emoji}
//               </Box>
//               {hobby.label}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
//   const handleNextClick = () => {
//     setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
//   };

//   const handlePreviousClick = () => {
//     setCurrentSection(
//       (prevSection) => (prevSection - 1 + sections.length) % sections.length
//     );
//   };

//   return (
//     <Box
//       display={"flex"}
//       flexDirection={"column"}
//       alignItems={"center"}
//       mt={"3rem"}
//     >
//       <Box display="flex" alignItems="center" justifyContent="center">
//         {/* Previous Arrow */}
//         <IconButton
//           color="primary"
//           onClick={handlePreviousClick}
//           disabled={currentSection === 0} // Disable when on the first section
//         >
//           <ArrowBack />
//         </IconButton>

//         {/* Terminal */}
//         <Terminal text={sections[currentSection].text} />

//         {/* Next Arrow */}
//         <IconButton
//           color="primary"
//           onClick={handleNextClick}
//           disabled={currentSection === sections.length - 1} // Disable when on the last section
//         >
//           <ArrowForward />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}

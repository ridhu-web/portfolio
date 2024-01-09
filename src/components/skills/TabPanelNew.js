import React, { useState } from "react";
import "./TabPanel.css";
import SkillSection from "./SkillSection";
import { info } from "../../info/Info";

import {
  FaSchool,
  FaUserGraduate,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiFlutter,
  SiAndroidstudio,
  SiJavascript,
  SiDart,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiApachemaven,
  SiGit,
  SiPostman,
} from "react-icons/si";

function TabPanel() {
  const [showtab, setShowtab] = useState(1);

  const skillSections = [
    {
      title: "Client Side",
      skills: [
        { name: "React", docLink: "https://react.dev/", icons: <FaReact /> },
        { name: "Redux", docLink: "https://redux.js.org/", icons: <SiRedux /> },
        {
          name: "Next.js",
          docLink: "https://nextjs.org/",
          icons: <SiNextdotjs />,
        },
        { name: "Material-UI", docLink: "https://mui.com/", icons: <SiMui /> },
        {
          name: "Tailwind CSS",
          docLink: "https://tailwindcss.com/",
          icons: <SiTailwindcss />,
        },
        // ... other client side skills
      ],
    },
    {
      title: "Server Side",
      skills: [
        {
          name: "Node.js",
          docLink: "https://nodejs.org/en",
          icons: <FaNodeJs />,
        },
        {
          name: "Express",
          docLink: "https://expressjs.com/",
          icons: <SiExpress />,
        },
        {
          name: "Django",
          docLink: "https://www.djangoproject.com/",
          icons: <SiDjango />,
        },
        { name: "PHP", docLink: "https://www.php.net/", icons: <FaPhp /> },
        // ... other server side skills
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          docLink: "https://www.mongodb.com/",
          icons: <SiMongodb />,
        },
        {
          name: "MySQL",
          docLink: "https://www.mysql.com/",
          icons: <SiMysql />,
        },
        {
          name: "SQLite",
          docLink: "https://www.sqlite.org/index.html",
          icons: <SiSqlite />,
        },
        {
          name: "Firebase",
          docLink: "https://firebase.google.com/",
          icons: <SiFirebase />,
        },
        // ... other database technologies
      ],
    },
    // ... other sections
    {
      title: "Mobile Application",
      skills: [
        {
          name: "Flutter",
          docLink: "https://flutter.dev/",
          icons: <SiFlutter />,
        },
        {
          name: "Android Studio",
          docLink: "https://developer.android.com/",
          icons: <SiAndroidstudio />,
        },
        // ... other mobile application skills
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          docLink: "https://www.java.com/en/",
          icons: <FaJava />,
        },
        {
          name: "JavaScript",
          docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          icons: <SiJavascript />,
        },
        {
          name: "TypeScript",
          docLink: "https://www.typescriptlang.org/",
          icons: <SiTypescript />,
        },
        {
          name: "Python",
          docLink: "https://www.python.org/",
          icons: <FaPython />,
        },
        { name: "Dart", docLink: "https://dart.dev/", icons: <SiDart /> },
        // ... other programming languages
      ],
    },
    {
      title: "DevOps Tools",
      skills: [
        {
          name: "Docker",
          docLink: "https://www.docker.com/",
          icons: <SiDocker />,
        },
        {
          name: "Kubernetes",
          docLink: "https://kubernetes.io/",
          icons: <SiKubernetes />,
        },
        {
          name: "Apache Maven",
          docLink: "https://maven.apache.org/",
          icons: <SiApachemaven />,
        },
        // ... other DevOps tools
      ],
    },
    {
      title: "Tools and CLIs",
      skills: [
        {
          name: "Linux",
          docLink: "https://www.linux.org/",
          icons: <FaLinux />,
        },
        { name: "Git", docLink: "https://git-scm.com/", icons: <SiGit /> },
        {
          name: "Postman",
          docLink: "https://www.postman.com/",
          icons: <SiPostman />,
        },
        // ... other tools and CLIs
      ],
    },
    // ... additional sections if needed
  ];

  return (
    <>
      <section>
        <div className="tab-content my-3" id="pills-tabContent">
          <div
            className={
              showtab === 1
                ? "tab-pane fade show active p-3"
                : "tab-pane fade show p-lg-3 p-2"
            }
            style={{
              backgroundColor: info.gradient,
              //   borderRadius: "5rem",
            }}
          >
            {skillSections.map((section, index) => (
              <SkillSection
                key={index}
                name={section.name}
                title={section.title}
                skills={section.skills}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TabPanel;

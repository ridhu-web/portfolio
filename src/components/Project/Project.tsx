// Project.jsx
import { Container } from "./styles";
import ScrollAnimation from 'react-animate-on-scroll';
import externalLinkIcon from "../../assets/external-link.svg";


// Interface defining the shape of props
interface ProjectItemProps {
  title: string;
  description: string;
  techList: string[];
  link: string;
}



const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, techList, link }) => {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={externalLinkIcon} alt="Visit site" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {techList.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );
};


export function Project() {
  const projects = [
    {
      title: "Navigation application for Bikers",
      description: "Built a mobile navigation application, specifically for cyclists that provides routes and turn-by-turn guidance which significantly improved the metrics in NASA TLX test by 50% compared to Mellow Bike Maps.",
      techList: ["Flutter", "Android Studio", "Google Maps API", "Dart"],
      link: "https://github.com/ridhu-web/Bike-Navigation-System-Android"
    },
    {
      title: "COVID Cases Data Visualization Tool",
      description: "This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.",
      techList: ["React.js", "d3.js","Python"],
      link: "https://github.com/ridhu-web/Covid_Data_Visualization"
    },

    {
      title: "Chicago Skyskraper Shadoes across Seasons",
      description: "The built web application visualizes the shadows of the skyscraper in Chicago across the seasons using OpenLayers Maps and Shadows data.",
      techList: ["React.js", "d3.js","Python"],
      link: "https://github.com/ridhu-web/Chicago_Shadows"
    },

    {
      title: "Domain Specific Language for Boolean Algebra",
      description: "This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.",
      techList: ["Scala", "Functional Programming","IntelliJ"],
      link: "https://github.com/ridhu-web/Boolean-Algebra-with-OOP"
    },
    {
      title: "Brain Tumour Classification",
      description: "Trained a classifier using Resnet-50 neural network, Brain Tumor MRI images were used to train and test the classified. Along with Stochastic Gradient Descent and cross-entropy loss, the model gave an effectiveness of 98%.",
      techList: ["Python", "pyTorch", "TensorFlow", "Machine Learning"],
      link : "https://github.com/ridhu-web"
    }
    // Add more projects as needed
  ];

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            techList={project.techList}
            link={project.link}
          />
        ))}
      </div>
    </Container>
  );
}

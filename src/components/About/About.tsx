import { Container } from "./styles";
import Ridhuparan from "../../assets/Ridhuparan.png";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import javaIcon from "../../assets/java.svg";
import EducationCard from "./EducationCardContainer";
import scalaLogo from "../../assets/scalaLogo.svg";
import cSharp from "../../assets/cSharp.svg";
import aws from "../../assets/aws.svg";
import mysql from "../../assets/mysql-icon.svg";
import linux from "../../assets/linux.svg";
import kubernetes from "../../assets/kubernetes.svg";
import docker from "../../assets/docker.svg";
import flutter from "../../assets/flutter.svg";
import angular from "../../assets/angular.svg";


import python from "../../assets/pythonLogo.svg";



export function About() {
  return (
    <Container id="about">
            <div className="about-text">

            <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.20 * 1000}>
          <img src={Ridhuparan} alt="Ridhuparan" />
        </ScrollAnimation>
      </div>
      </div>
      <div className="about-text" style={{marginBottom : "450px"}}>
      <ScrollAnimation animateIn="fadeInRight">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Ridhuparan, a graduate student at UIC with 3 years of Industrial experience in Software Development. I'm passionate about software engineering, web development and cloud technologies.</p>
        
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          My strengths are the ability to analyse and solve a problem in scientific way, eager to learn new ways of solving problem and effective communication.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <p>
          I am skilled in programming languages like Java, Javascript, Python, C#, C, C++, frontend techlogies like React, Angular and Backend Technologies like .NET, Eclipse, Flask.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I'm also proficient with AWS Cloud, cloud related concepts and Machine Learning and data analysis using Python.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
          <h2>Education</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
      <EducationCard 
        name="University of Illinois at Chicago, USA" 
        period="Aug 2022 - May 2024" 
        cgpa="3.85/4.0" 
        degree="Master of Science in Computer Science" 
      />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
      <EducationCard 
        name="PSG iTech ( affliated to Anna University), India" 
        period="Aug 2016 - May 2020" 
        cgpa="8.21/10" 
        degree="Bachelors Degree in Electrical and Communication Engineering" 
      />
      </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={scalaLogo} alt="Scala" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={python} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cSharp} alt="C Sharp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={aws} alt="AWS" />
            </ScrollAnimation>
        </div>
        <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mysql} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={linux} alt="Linux" />
            </ScrollAnimation>
            </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={kubernetes} alt="Kubernetes" />
            </ScrollAnimation>
            </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={docker} alt="Docker" />
              </ScrollAnimation>
              </div>
              <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={flutter} alt="Flutter" />
            </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={angular} alt="Angular" />
            </ScrollAnimation>
            </div>
      </div>
      </div>
    </Container>
  )
}

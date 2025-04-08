import React from "react";
import "./skills.css";
import {
  FaCode,
  FaCloud,
  FaServer,
  FaMicrosoft,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiJava,
  DiPython,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiAws,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiSpring,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiKubernetes,
  SiDocker,
  SiBitbucket,
  SiGooglecloud,
  SiRedux,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C" },
      { name: "Python", icon: <DiPython /> },
      { name: "Java", icon: <DiJava /> },
    ],
  },
  {
    category: "Java Technologies",
    skills: [
      { name: "JDBC" },
      { name: "Servlets" },
      { name: "JSP" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Windows" },
      { name: "UNIX" },
      { name: "LINUX" },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <DiAws /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Azure", icon: <FaMicrosoft /> }, // fallback icon
    ],
  },
  {
    category: "CI/CD Tools",
    skills: [
      { name: "Jenkins", icon: <FaCloud /> },
      { name: "GitLab" },
      { name: "AWS CodePipeline" },
    ],
  },
  {
    category: "Java Frameworks",
    skills: [
      { name: "Spring", icon: <SiSpring /> },
      { name: "Spring Boot", icon: <FaServer /> },
      { name: "Spring MVC" },
      { name: "Spring Security" },
      { name: "Spring WebFlux" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML5", icon: <DiHtml5 /> },
      { name: "CSS3", icon: <DiCss3 /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "AJAX" },
      { name: "Bootstrap", icon: <DiBootstrap /> },
    ],
  },
  {
    category: "Web Frameworks",
    skills: [
      { name: "Angular" },
      { name: "Angular Material" },
      { name: "ReactJS", icon: <DiReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "React Hooks" },
      { name: "React Router" },
    ],
  },
  {
    category: "Open Source Tools",
    skills: [
      { name: "JUnit", icon: <FaCode /> }, // fallback icon
      { name: "log4j" },
      { name: "GIT", icon: <DiGit /> },
      { name: "SVN" },
      { name: "Bitbucket", icon: <SiBitbucket /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Other Backend Frameworks",
    skills: [
      { name: "Node.js",icon: <DiNodejs />},
      { name: "Express.js",icon: <FaServer /> },
    ],
  },
  {
    category: "Containerization",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
  {
    category: "Orchestration",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skill-list">
              {skillCategory.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon && <span>{skill.icon}</span>}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

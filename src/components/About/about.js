// export default About;
import React from 'react';
import './about.css';
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// Icons
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/javascript.png';
import reactLogo from '../../assets/react.png';
import nodeLogo from '../../assets/node.png';
import awsLogo from '../../assets/aws.png';
import gitLogo from '../../assets/git.png';
import oracleLogo from '../../assets/oracle.png';
import dockerLogo from '../../assets/docker.png';
import kubernetesLogo from '../../assets/kubernetes.png';

const techStack = [
  { src: htmlLogo, alt: "HTML" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: reactLogo, alt: "React" },
  { src: nodeLogo, alt: "Node.js" },
  { src: awsLogo, alt: "AWS" },
  { src: gitLogo, alt: "Git" },
  { src: oracleLogo, alt: "Oracle" },
  { src: dockerLogo, alt: "Docker" },
  { src: kubernetesLogo, alt: "Kubernetes" },
];

const About = () => {
  const leftIcons = techStack.slice(0, 5);
  const rightIcons = techStack.slice(5);

  return (
    <section id="about">
      {/* Left-side floating icons */}
      <div className="tech-side left-side">
        {leftIcons.map((tech, index) => {
          const delay = (Math.random() * 5).toFixed(2);
          return (
            <div
              key={tech.alt}
              className="side-icon pop-animation"
              style={{ animationDelay: `${delay}s` }}
            >
              <img src={tech.src} alt={tech.alt} />
              <span>{tech.alt}</span>
            </div>
          );
        })}
      </div>

      {/* Centered content */}
      <div className="about-center">
        <h1 className="about-name">Praneeth Devapuja</h1>
        <div className="contact-info">
          <p><FaMapMarkerAlt className="icon" />Texas | USA</p>
          <p><FaEnvelope className="icon" /><a href="mailto:praneethdevapuja@gmail.com">praneethdevapuja@gmail.com</a></p>
        </div>
        <div className="about-description">
          <p>I'm a Full Stack Developer with around 4+ years of hands-on experience building fast, secure, and cloud-ready applications.</p>
          <p>I work across the stack with Java (Spring Boot), Angular, React, and cloud platforms like Azure, AWS.</p>
          <p>I love writing clean, testable code, solving real-world problems, and delivering features that make users' lives easier.</p>
          <p>Whether it’s deploying microservices or fixing a tricky UI bug, I’m all about building software that works — and lasts.</p>
        </div>
      </div>

      {/* Right-side floating icons */}
      <div className="tech-side right-side">
        {rightIcons.map((tech, index) => {
          const delay = (Math.random() * 5).toFixed(2);
          return (
            <div
              key={tech.alt}
              className="side-icon pop-animation"
              style={{ animationDelay: `${delay}s` }}
            >
              <img src={tech.src} alt={tech.alt} />
              <span>{tech.alt}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
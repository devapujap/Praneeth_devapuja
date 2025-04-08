import React from 'react';
import './about.css';
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

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
  return (
    <section id="about">
      <div className="about-container">
        {/* Left: About Content */}
        <div className="about-details">
          <h1 className="about-name">Praneeth Devapuja</h1>

          <div className="contact-info">
            <p><FaMapMarkerAlt className="icon" />Texas | USA</p>
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:Ashwiniveddamoni02@gmail.com">praneethdevapuja@gmail.com</a>
            </p>
          </div>

          <div className="about-description">
            {[
              "It started with curiosity—debugging lines of code late into the night, wondering how software shapes the world.",
              "Eight years later, I’m still just as curious—but now I build full-stack systems that power fintech, healthcare, and e-commerce.",
              "I’ve seen how the right line of code can reduce wait times, drive revenue, or protect patient data.",
              "Every project is a puzzle I love solving—balancing performance, scalability, and user experience.",
              "Whether leading architecture or collaborating across teams, I’m all in on clean solutions that last.",
              "Because to me, great software doesn’t just work—it makes a difference.",
            ].map((line, index) => (
              <motion.p
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right: Tech Stack */}
        <div className="tech-right">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-right-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={tech.src} alt={tech.alt} className="tech-right-icon" />
              <span className="tech-right-label">{tech.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

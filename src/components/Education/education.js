import React from "react";
import "./education.css";
import uni1Logo from "../../assets/SAU_seal.png"; // Replace with actual logo paths
import uni2Logo from "../../assets/GNI.png";


const Education = () => {
  const educationData = [
    {
      degree: "Master's in Computer & Informational Science",
      university: "Southern Arkansas University,Arkansas | USA",
      logo: uni1Logo,
    },
    {
      degree: "Bachelor's in Computer Science Engineering",
      university: "Guru Nanak Institutions Technical Campus,Ibrahimpatnam | INDIA",
      logo: uni2Logo,
    },
   
  ];

  return (
    <section id="education">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <img src={edu.logo} alt={edu.university} className="edu-logo" />
            <h3 className="edu-degree">{edu.degree}</h3>
            <span className="edu-duration">{edu.duration}</span>
            <p className="edu-gpa">{edu.gpa}</p>
            <p className="edu-university">{edu.university}</p>
            <p className="edu-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

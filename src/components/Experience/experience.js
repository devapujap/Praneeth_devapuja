import React from "react";
import "./experience.css";
import morganstanley from "../../assets/morgan-stanley.png";
import VRITECH from "../../assets/VRITECH.jpg";
import Invesco from "../../assets/Invesco-Ltd.webp";

const Experience = () => {
    const experiences = [
        {
            title: "Full Stack Java Developer",
            company: "VRI TECH Consulting LLC - USA",
            date: "Sept 2024 – Present",
            logo: VRITECH,
        },
        {
            title: "Full Stack Java Developer",
            company: "Morgan Stanley – USA",
            date: "Jun 2023 - Aug 2024",
            logo: morganstanley,
        },
        {
            title: "Java Developer",
            company: "Invesco – INDIA",
            date: "Jul 2019 - Dec 2021",
            logo: Invesco,
        },
    ];

    return (
        <section id="experience">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <div className="exp-header">
                                <div className="exp-logo-container">
                                    <img src={exp.logo} alt={exp.company} className="exp-logo" />
                                </div>
                                <div className="exp-info">
                                    <h3 className="exp-title">{exp.title}</h3>
                                    <span className="exp-date">{exp.date}</span>
                                </div>
                            </div>
                            <h4 className="exp-company">{exp.company}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

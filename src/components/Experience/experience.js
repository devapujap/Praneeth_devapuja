import React from "react";
import "./experience.css";
import UBSLogo from "../../assets/UBS-logo.jpg";
import Cognizant from "../../assets/Cognizant.jpeg";
import Wipro from "../../assets/Wipro.jpeg";
import State_of_taxes from "../../assets/State_of_Texas.jpeg";

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer II",
            company: "State of Texas – USA",
            date: "Feb 2024 – Present",
            logo: State_of_taxes,
        },
        {
            title: "Software Engineer",
            company: "UBS – USA",
            date: "Jan 2023 - May 2023",
            logo: UBSLogo,
        },
        {
            title: "Software Developer",
            company: "Wipro - INDIA",
            date: "Feb 2021 - Dec 2021",
            logo: Wipro,
        },
        {
            title: "Associate Software Engineer",
            company: "Cognizant – INDIA",
            date: "July 2020 – Jan 2021",
            logo: Cognizant,
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

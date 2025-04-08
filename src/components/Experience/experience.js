import React from "react";
import "./experience.css";
import UBSLogo from "../../assets/UBS-logo.jpg";
import BNYLogo from "../../assets/BNY_logo_2024.svg.png";
import LegacyHealthLogo from "../../assets/Legacy.jpg";
import KnoahLogo from "../../assets/knoah.jpeg";

const Experience = () => {
    const experiences = [
        {
            title: "Senior Software Developer",
            company: "UBS – USA",
            date: "June 2023 – Present",
            logo: UBSLogo,
        },
        {
            title: "Software Developer",
            company: "BNY Mellon – USA",
            date: "March 2021 – June 2023",
            logo: BNYLogo,
        },
        {
            title: "Software Developer",
            company: "Legacy Health – USA",
            date: "March 2019 – Feb 2021",
            logo: LegacyHealthLogo,
        },
        {
            title: "Software Developer",
            company: "Knoah Solutions – INDIA",
            date: "July 2017 – Feb 2019",
            logo: KnoahLogo,
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

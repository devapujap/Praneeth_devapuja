// import React from "react";
// import "./projects.css";
// import outdoorAdventure from "../../assets/outdoor_adventure.jpg";
// import iotResearch from "../../assets/matter_protocal.jpg";

// const projects = [
//     {
//         title: "Outdoor Adventure App",
//         image: outdoorAdventure,
//         description: [
//             "Technologies: Python, Pandas, Matplotlib, NumPy, NLP Tools",
//             "Built a data engineering and reporting solution to analyze and visualize business insights, improving data accuracy by 30%.",
//             "Developed NLP-based features for advanced user analytics and recommendations.",
//             "Recognized as Best Project for Outdoor Adventure App-Dr. Esther Ledelle Mead, SAU."
//         ]
//     },
//     {
//         title: "IoT Research - Matter Protocol",
//         image: iotResearch,
//         description: [
//             "Explored the application of the Matter Protocol in IoT ecosystems, identifying interoperability improvements.",
//             "Researched secure communication standards, contributing to industry knowledge on IoT security."
//         ]
//     }
// ];

// const Projects = () => {
//     return (
//         <section id="projects">
//             <h2 className="section-title">PROJECTS</h2>
//             <div className="projects-container">
//                 {projects.map((project, index) => (
//                     <div key={index} className="project-row">
//                         <img src={project.image} alt={project.title} className="project-image" />
//                         <div className="project-details">
//                             <h3>{project.title}</h3>
//                             <ul>
//                                 {project.description.map((point, i) => (
//                                     <li key={i}>{point}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Projects;

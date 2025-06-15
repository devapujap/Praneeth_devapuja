import React from "react";
import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Skills from "./components/Skills/skills";
//import Projects from "./components/Projects/projects";


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content">
                <Navbar />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Navbar/>
                {/* <Projects /> */}
            </div>
        </div>
    );
};

export default App;

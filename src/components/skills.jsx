import React from "react";
import { GiFlexibleLamp } from "react-icons/gi"; 
import { FaBalanceScale } from "react-icons/fa"; 
import { GiTeamIdea } from "react-icons/gi"; 
import { MdReportProblem } from "react-icons/md"; 
import { GrAssistListening } from "react-icons/gr"; 
import { FaGithub, FaCss3, FaBootstrap, FaHtml5, FaReact, FaJs } from 'react-icons/fa';

function MySkills() {
  return (
    <div className="skills-sec" id="skills" data-fade>
      <h1>Skills</h1>
      <div className="full-skills">
        <div className="skills-list">
          <h2>Technical Skills:</h2>
          <ul className="Tech">
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3 /> CSS3</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> ReactJS</li>
            <li><FaBootstrap /> Bootstrap</li>
            <li><FaGithub /> GitHub</li>
          </ul>
        </div>
        <div className="skills-list-2">
          <h2>Soft Skills:</h2>
          <ul className="Soft">
            <li><GrAssistListening /> Active Listening</li>
            <li><MdReportProblem /> Problem-Solving</li>
            <li><GiTeamIdea /> Collaborative</li>
            <li><FaBalanceScale /> Work-Life Balance</li>
            <li><GiFlexibleLamp /> Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
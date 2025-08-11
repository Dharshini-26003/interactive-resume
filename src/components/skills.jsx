import React from "react";
import {FaGithub, FaCss3, FaBootstrap, FaHtml5, FaReact, FaJs } from 'react-icons/fa';


function MySkills(){
    return (
        <div id="skills">
        <h2>Skills</h2>
        <div className='skills-list'>
            <h1>Technical Skills: </h1>
           <ul className="Tech">
            <li> <h2><FaHtml5 /></h2> HTML5</li>
            <li> <FaCss3 />  CSS3</li>
            <li> <FaJs/>   JavaScript</li>
            <li> <FaReact />  ReactJS</li>
            <li> <FaBootstrap />  Bootstarp</li>
            <li> <FaGithub />  GitHub</li>
           </ul>
        </div>
        <div className='skills-list'>
            <h2>Soft Skills: </h2>
           <ul className="Soft">
            <li>Active Listening</li>
            <li>Problem-Solving</li>
            <li>Collaborative</li>
            <li>Work-Life Balance</li>
            <li>Adaptability</li>
           </ul>
        </div>
        </div>
    );
}
export default MySkills;
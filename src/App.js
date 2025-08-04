import React from "react"
import MyProfile from './components/myprofile'
import ProfilePic from "./sidebar/ProfilePic";
import Icons from "./sidebar/socialicons";
import About from "./components/about"; 
import MySkills from "./components/skills";
import MyEducations from "./components/education";
import MyProjects from "./components/projects";
import Mycontact from "./components/contact";
import Footer, {useState, useRef} from "./components/footer";
import './styles/App.css';
import './styles/index.css'
import './styles/resumeintro.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/education.css';
import './styles/projects.css';
import './styles/contacts.css';
import './styles/footer.css';

function App() {
  return (
    <div>
      <div className="resumeintro" fade-in="true">
        <ProfilePic/>
        <MyProfile />
        <Icons />
      </div>
      <div className="about-sec" fade-in="true">
        <About />
      </div>
      <div className="skills-sec" fade-in="true">
        <MySkills />
      </div>
      <div className="edu-sec" fade-in="true">
        <MyEducations />  
      </div>
      <div className="project-sec"  fade-in="true">
        <MyProjects/>
      </div>
      <div className="contact-sec"  fade-in="true">
        <Mycontact />
      </div>  
      <div className="footer-sec" fade-in="true">
      <Footer/>
      </div>
        
    </div>
  );
}

export default App;
import React from "react"
import MyProfile from './components/myprofile'
import ProfilePic from "./sidebar/ProfilePic";
import Icons from "./sidebar/socialicons";
import About from "./components/about"; 
import MySkills from "./components/skills";
import MyEducations from "./components/education";
import './styles/App.css';
import './styles/index.css'
import './styles/resumeintro.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/education.css';

function App() {
  return (
    <div>
      <div className="resumeintro">
        <ProfilePic />
        <MyProfile />
        <Icons />
      </div>
      <div className="about-sec">
        <About />
      </div>
      <div className="skills-sec">
        <MySkills />
      </div>
      <div className="edu-sec">
        <MyEducations />  
      </div>
    </div>
  );
}

export default App;
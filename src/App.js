import React from "react"
import MyProfile from './components/myprofile'
import ProfilePic from "./sidebar/ProfilePic";
import Icons from "./sidebar/socialicons";
import About from "./components/about"; 
import MySkills from "./components/skills";
import './styles/App.css';
import './styles/index.css'
import './styles/resumeintro.css';
import './styles/about.css';


function App() {
  return (
    <div>
      <div className="resumeintro">
        <ProfilePic />
        <MyProfile />
        <Icons />
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="skills-section">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
import React from "react"
import MyProfile from './components/myprofile'
import ProfilePic from "./sidebar/ProfilePic";
import Icons from "./sidebar/socialicons";
import './styles/App.css';
import './styles/index.css'
import './styles/resumeintro.css';


function App() {
  return (
    <div>
      <div className="resumeintro">
        <ProfilePic />
        <MyProfile />
        <Icons />
      </div>
    </div>
  );
}

export default App;
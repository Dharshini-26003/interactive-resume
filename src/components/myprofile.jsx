import React from 'react'
import { IoIosColorPalette } from "react-icons/io"; 
import { BsRocketTakeoff } from "react-icons/bs"; 
import { BiStar } from "react-icons/bi"; 
import { HiDesktopComputer } from "react-icons/hi"; 
import { GiSparkles } from "react-icons/gi"; 

function MyProfile() {
  return (
    <div className='profile' id='home'>
      <h2>Hi! I'm Dharshini...</h2>
      <div className="floating-icons">
  <span><GiSparkles /></span>
  <span><HiDesktopComputer /></span>
  <span><BiStar /></span>
  <span><BsRocketTakeoff /></span>
  <span><IoIosColorPalette /></span>
</div>

  
<button onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}} className='knowmore'>
  Know More
</button>      
    </div>
  )
}
export default MyProfile;


import React from 'react'
import dharshini from '../assets/profile.jpg'


function MyProfile() {
  return (
    <div className='profile'>
      <h2>Hi! Welcome to My Resume</h2>
      <p>Am Yogadharshini, a Front-End Developer seeking for Opportunities to transform my skills into user friendly websites</p>
      <img src={dharshini} alt="Yogadharshini" className='Profile-img'/>
    </div>
  )
}
export default MyProfile;
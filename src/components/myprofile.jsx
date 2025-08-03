import React from 'react'
function MyProfile() {
  return (
    <div className='profile' id='home'>
      <h2>Hi! I'm Dharshini</h2>
      <h2>Welcome to my profile...!!!</h2>

<button onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}} className='knowmore'>
  Know More
</button>      
    </div>
  )
}
export default MyProfile;

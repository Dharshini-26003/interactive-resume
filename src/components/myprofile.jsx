import React from 'react'
function MyProfile() {
  return (
    <div className='profile' id='home'>
      <h2>Hi! </h2>
      <h2>I'm Dharshini </h2>
  
<button onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}} className='knowmore'>
  Know More
</button>      
    </div>
  )
}
export default MyProfile;
import React from 'react'
function MyProfile() {
  return (
    <div className='profile' id='home'>
      <h2>Hi! Am Dharshini</h2>
<button onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}} className='knowmore'>
  Know More
</button>      
    </div>
  )
}
export default MyProfile;
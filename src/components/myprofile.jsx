import React from 'react'
function MyProfile() {
  return (
    <div className='profile' id='home'>
<<<<<<< HEAD
      <h2>Hi! I'm Dharshini, Welcome to my profile...</h2>
  
=======
      <h2>Hi! I'm Dharshini</h2>
      <h2>Welcome to my profile...!!!</h2>

>>>>>>> 1d73f7cf56318f9807b7880f6e544be7ae6d20d2
<button onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}} className='knowmore'>
  Know More
</button>      
    </div>
  )
}
export default MyProfile;

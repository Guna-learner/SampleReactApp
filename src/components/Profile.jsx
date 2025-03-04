import React from 'react'
import '../css/profile.css'
import Photo from '../assets/Photo.png'
import edu from '../assets/G2 Badge.png'
const Profile = () => {
  return (
    <div className='profile'>
        <div className="p-content">
            <img src={Photo} alt="" />
            <div className="about">
      <h2>Not just our technology, we are loved for our <span className='text'>EDI support</span> too</h2>
      <p>We use Zenbridge as middleware for the end to
end sales cycle.The customer service and
developer resource(s) we have partnered with
have been exceptional.</p>
      <p>Seth V, Senior Director, Operations & Logistics</p>
            </div>
            <div className="education">
   <img src={edu} alt="" />
   <img src={edu} alt="" />
   <img src={edu} alt="" />
   <img src={edu} alt="" />
   <img src={edu} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Profile

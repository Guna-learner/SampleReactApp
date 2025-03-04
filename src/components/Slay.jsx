import React from 'react'
import stake from '../assets/Stake holders wheel.png'
import arc from '../assets/BG Arc.png'
import icon1 from '../assets/Icon 1.png'
import icon2 from '../assets/Icon 2.png'
import icon3 from '../assets/Icon 3.png'
import '../css/slay.css'

const Slay = () => {
  return (
   <>
    <div className='slay'>
   
        <div className="s-left">
        <img src={icon1} className='icon1' alt="" />
    <img src={icon2} className='icon2' alt="" />
    <img src={icon3} className='icon3' alt="" />
            <h1>Slay your EDI</h1>
            <h1><span className='text'>Integrate</span> Faster</h1>
            <p>Leverage the power of API technology faster
integrations, greater data accuracy, global connectivity &
total automation.</p>
            <button>Schedule a free demo</button>
        </div>
       <div className="s-right">
        <img src={stake} alt="" />
       </div>

  <div className="arc">
        {/* <img src={arc} alt="" /> */}
       </div>
    </div>
   
   </>
    
  )
}

export default Slay

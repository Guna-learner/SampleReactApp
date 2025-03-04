import React from 'react'
import '../css/modern.css'
import fast from '../assets/Faster.png'

const Moder = () => {
  return (
    <div className='modern'>
        <div className="md-content">
            <h1>A modern day for <span className='text'>EDI platform</span> your fast moving team</h1>
            <div className="table">
                <div className="t-left">
                    <ul>
                        <li> <img src={fast} alt="" /> Transactions</li>
                        <div className="drop">
                        </div>
                        <li> <img src={fast} alt="" /> Trading Partners</li>
                        <div className="drop"></div>
                        <li> <img src={fast} alt="" /> Reports</li>
                        <div className="drop"></div>
                        <li> <img src={fast} alt="" /> Issues & Alerts</li>
                        <div className="drop"></div>
                        <li> <img src={fast} alt="" /> API for EDI</li>
                        <div className="drop"></div>
                        <li> <img src={fast} alt="" /> EDI Specification Editor</li>
                        <div className="drop"></div>
                    </ul>
                </div>
                <div className="t-right">
                    <div className="m-t-content">
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Moder

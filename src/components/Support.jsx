import React from 'react'
import '../css/support.css'
import fast from '../assets/Faster.png'
const Support = () => {
  return (
    <div className='support'>
      <div className="sup-top">
                <div className="why">
                  <h1>
                  Why Zenbridge ?
                  </h1>
                  <p>Unmatched Pricing, Unparalleled Support.</p>
                </div>
                <div className="nature">
                  <h6>Nature of use
                  </h6>
                  <ul>
                    <li>Self serve mode</li>
                    <li>Fully managed mode</li>
                    <li>Fully customized implementation</li>
                  </ul>
                </div>
                <div className="exclusive">
                  <h6>Support</h6>
                  <ul>
                    <li>Self serve mode</li>
                    <li>Fully managed mode</li>
                    <li>Fully customized implementation</li>
                  </ul>
                </div>
      </div>
      <div className="sup-bottom">
        <div className="sup-b-left">
            <h1>With our APIs, we are challenging the status quo of <span className='text'>EDI integrations</span> ? </h1>
        <p>EDI integrations don t have to be slow, frustrating, or costly.
Invest in the fastest growing new age EDI technology and save
your company from EDI nightmares.
</p>
        </div>
        <div className="sup-b-right">
            <ul>
                <li>
                    <img src={fast} alt="" />
                    <div className="sup-cont">
                    <p>100 Million+</p>
                    <p>Transactions & counting</p>
                    </div>
                </li>
                <li>
                <img src={fast} alt="" />
                <div className="sup-cont">
                    <p>3-4 Weeks</p>
                    <p>Fastest integration time</p>
                    </div>
                </li>
                <li>
                <img src={fast} alt="" />
                <div className="sup-cont">
                    <p> $ 0.05</p>
                    <p>Lowest transaction fee</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Support

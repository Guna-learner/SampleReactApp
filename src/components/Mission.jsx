import React from 'react'
import '../css/mission.css'

import fast from '../assets/Faster.png'
const Mission = () => {
    return (
        <div className='mission'>
            <div className="m-content">
                <div className="item1 items">
                    <h1>We are on a mission to make
                        integration easy</h1>
                    <h1>
                        An EDI platform for all retailers, suppliers, manufacturers,
                        transportation, 3PLs & developers.
                    </h1>
                </div>
                <div className="item2 items">
                <div className="faster">
                    <img src={fast} alt="" />
                    </div>
                    <p>Faster & stabler integrations</p>
                    <p>Our API eliminates EDI complexities using
                        a very rich modern developer toolset,
                        resulting in faster EDI integrations &
                        production environments that are 10X
                        stabler than typical EDI solutions.</p>
                </div>
                <div className="item3 items">
                <div className="faster">
                    <img src={fast} alt="" />
                    </div>
                    <p>Global connectivity</p> 
                    <p>Our API eliminates EDI complexities using
                        a very rich modern developer toolset,
                        resulting in faster EDI integrations &
                        production environments that are 10X
                        stabler than typical EDI solutions.</p></div>
                <div className="item4 items">
                <div className="faster">
                    <img src={fast} alt="" />
                    </div>
                    <p>Real time data validation</p> 
                    <p>Our API eliminates EDI complexities using
                        a very rich modern developer toolset,
                        resulting in faster EDI integrations &
                        production environments that are 10X
                        stabler than typical EDI solutions.</p></div>
                <div className="item5 items">
                    <div className="faster">
                    <img src={fast} alt="" />
                    </div>
                    <p>Unlimited support</p>
                    
                     <p>Our API eliminates EDI complexities using
                    a very rich modern developer toolset,
                    resulting in faster EDI integrations &
                    production environments that are 10X
                    stabler than typical EDI solutions.</p></div>
            </div>

        </div>
    )
}

export default Mission

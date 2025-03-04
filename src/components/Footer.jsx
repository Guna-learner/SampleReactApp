import React from 'react'
import '../css/footer.css'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot1">
        <h6>Solutions</h6>
        <ul>
          <li>Developers</li>
          <li>EDI vs API</li>
          <li>API for EDI</li>
          <li>Security</li>
          <li>EDI Software - Decision
          making guide</li>
        </ul>
      </div>
      <div className="foot2">
        <h6>Integrations</h6>
        <ul>
          <li>NetSuite Integration
          </li>
          <li>Shopify Integration
          </li>
          <li>Quickbooks Integration
          </li>
          <li>Other ERP Integrations
          </li>
        </ul>
      </div>
      <div className="foot3">
      <h6>Standards</h6>
        <ul>
          <li>API for EDIFACT
          </li>
          <li>API for ANSI X12
          </li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="foot4">
        <h6>Resources</h6>
        <ul>
        <li>Blog</li>
        <li>Documentation</li>
        </ul>
      </div>
      <div className="foot5">
        <h6>Company</h6>
        <ul>
          <li>
          Home
          </li>
          <li>About us
          </li>
          <li>Careers</li>
          <li>Insights</li>
          <li>Contact us
          </li>
        </ul>
      </div>
      <div className="social-m">
        <h6>Follow us</h6>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
        </ul>
        
      </div>
      <div className="terms">
        <div className="t-left">
          <h6>© 2024. All rights reserved.</h6>
        </div>
        <div className="t-right">
        <h6>Privacy policy</h6>
        <h6>Terms of service</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/insta.png'
import pintester_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatss.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" width={150} />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" width={50} />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt=""  width={50}/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" width={50} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer

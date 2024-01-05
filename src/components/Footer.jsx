
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from "./CVLogo.jpeg"

const Footer = () => {
  return (
    <footer>
      <div className='logodv'>
        <img src={image} alt=""  style={{width:'40px',height:'40px',borderRadius:'10px'}}/>
        </div>
        <div className='Linkdv'>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://Instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://LinkedIn.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
      
    </footer>
  );
};

export default Footer;

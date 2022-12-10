import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import { Link } from 'react-router-dom'
import mrami from "../../images/mrami.png";

export const Footer = () => {
	
  return (
    <div className='footer'>
        <ul className="footer_media">
          <li className="footer_media_icons">
			<a href=''><BsFacebook/></a>
          </li>
          <li className="footer_media_icons">
            <a href=''><BsInstagram/></a>
          </li>
          <li className="footer_media_icons">
            <a href='https://www.linkedin.com/in/mohamed-rami-18a472216/'><BsLinkedin/></a>
          </li>
          <li className="footer_media_icons">
            <a href=''><BsTwitter/></a>
          </li>
		  <li className="footer_media_icons">
            <a href='https://github.com/ri-simohamed'><BsGithub/></a>
          </li>
        </ul>
		<div className="footer_copy">&copy;
		<span className='footer_copy_mrami'>
			mrami
		</span>
		</div>
		<Link to="/" style={{ textDecoration: 'none' }}> 
      <img src={mrami} alt="logo" className="footer_logo" />
      </Link>
    </div>
  )
}

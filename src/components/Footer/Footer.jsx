import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

export const Footer = () => {
  return (
    <div className='footer'>
        <ul className="footer_media">
          <li className="footer_media_icons">
			<BsFacebook/>
          </li>
          <li className="footer_media_icons">
            <BsInstagram/>
          </li>
          <li className="footer_media_icons">
            <BsLinkedin/>
          </li>
          <li className="footer_media_icons">
            <BsTwitter/>
          </li>
        </ul>
    </div>
  )
}

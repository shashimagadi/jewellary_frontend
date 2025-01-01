import React from 'react'
import arjun from "../assets/img/arjun.jpg"
import anjali from "../assets/img/anjali.jpg"
import priya from "../assets/img/priya.jpg"
import ravi from "../assets/img/ravi.jpg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Faculty = () => {
  return (
    <>
    <div className='' style={{backgroundColor:'#f1eaea', alignItems:'center', textAlign:'center'}}>
         <h1 style={{ alignItems:'center'}}>Faculty</h1>
         <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
     <div className="faculty-container mt-5  d-flex ">

      <div className="faculty-card ">
        <img src={arjun} alt="Arjun Mehta" />
        
        <div className="faculty-details ">
          <h2>Mr. Arjun Mehta</h2>
          <h5>Head Designer</h5>
          <p>Custom jewelry design, modern and traditional fusion styles.</p>
          <div className="social-media-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="faculty-card ">
        <img src={anjali} alt="Anjali" />
        <div className="faculty-details">
          <h2>Ms. Anjali</h2>
          <h5>Head Designer</h5>
          <p>Specialized in crafting elegant and timeless jewelry designs.</p>
          <div className="social-media-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="faculty-card ">
        <img src={ravi} alt="Ravi" />
        <div className="faculty-details">
          <h2>Mr. Ravi</h2>
          <h5>Lead Craftsman</h5>
          <p>Expert in precision and craftsmanship for bespoke jewelry.</p>
          <div className="social-media-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="faculty-card " >
        <img src={priya} alt="Priya" />
        <div className="faculty-details">
          <h2>Ms. Priya</h2>
          <h5>Design Consultant</h5>
          <p>Advises clients on the latest trends and personalized designs.</p>
          <div className="social-media-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}









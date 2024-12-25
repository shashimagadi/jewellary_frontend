import React from 'react'
import pic4 from "../assets/img/pic4.jpg"

export const About = () => {
  return (
    <div><div className="about-us-row d-flex">
    <div className="about-us-img-container col-md-6">
      <img src={pic4} className="about-us-image" alt="About Sri Ganesh" />
    </div>
  
    <div className="about-us-text-container col-md-6 mt-5">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-description">
        Welcome to Sri Ganesh, where tradition meets timeless elegance. For years,
        we’ve been dedicated to creating exquisite jewelry that celebrates life’s most
        precious moments. Rooted in craftsmanship and inspired by artistry, our collections
        are a perfect harmony of modern design and classic beauty. At Sri Ganesh, we believe
        that jewelry is more than an accessory; it’s an expression of love, a symbol of tradition,
        and a reflection of your unique story. Each piece we craft is designed to capture these
        emotions, blending intricate details with the finest materials to create something truly extraordinary.
      </p>
  
      <div className="about-us-list-container mt-4">
        <ul className="about-us-list">
          <li className="about-us-list-item">
            <i className="bi bi-award"></i>
            <div className="about-us-list-text ms-3">
              <h5 className="about-us-list-title">Uncompromised Quality:</h5>
              <p className="about-us-list-description">We are committed to offering only the purest and most authentic jewelry.</p>
            </div>
          </li>
          <li className="about-us-list-item">
            <i className="bi bi-tools"></i>
            <div className="about-us-list-text ms-3">
              <h5 className="about-us-list-title">Exquisite Craftsmanship</h5>
              <p className="about-us-list-description">Every piece is crafted with precision, care, and attention to detail.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div></div>
  )
}

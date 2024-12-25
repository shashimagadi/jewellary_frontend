import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
export const About2 = () => {
  return (
  <>
    

<div className="services-container">
      <h2 className="services-heading">About US</h2>
      <div className="cards-row">
        {/* Card 1 */}
        <div className="service-card">
          <div className="service-icon">
            <i className="bi bi-gem"></i>
          </div>
          <h4>Jewelry Design</h4>
          <p>Custom jewelry designs to bring your ideas to life with precision and elegance.</p>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <div className="service-icon">
            <i className="bi bi-diamond"></i>
          </div>
          <h4>Diamonds & Gems</h4>
          <p>Premium quality diamonds and gemstones that elevate every piece of jewelry.</p>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <div className="service-icon">
            <i className="bi bi-calendar-range"></i>
          </div>
          <h4>Timely Delivery</h4>
          <p>We ensure that every piece of jewelry is delivered on time, without compromise.</p>
        </div>

        {/* Card 4 */}
        <div className="service-card">
          <div className="service-icon">
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <h4>Customer Satisfaction</h4>
          <p>We guarantee complete customer satisfaction with every piece we create.</p>
        </div>
      </div>
    </div>
  </>
  )
}

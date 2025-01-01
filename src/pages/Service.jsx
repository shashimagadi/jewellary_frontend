import React, { useEffect, useState } from "react";

export const Service = () => {
  
  return (
    <>

<div>
      
    </div>
      <div
        className=""
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "blue",
        }}
      >
        <h1>Service</h1>
      </div>

      <div class="custom-services-container">
        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-pencil"></i>
          </div>
          <h3 class="custom-service-title">Jewelry Repair and Restoration</h3>
          <p class="custom-service-description">
            Preserve the beauty of your treasured jewelry with our professional
            repair and restoration services. From resizing rings to fixing
            broken chains, we ensure your pieces look as good as new.
          </p>
        </div>

        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-hammer"></i>
          </div>
          <h3 class="custom-service-title">Jewelry Cleaning and Polishing</h3>
          <p class="custom-service-description">
            Restore the sparkle of your favorite jewelry with our expert
            cleaning and polishing services. Perfect for reviving dull or
            tarnished pieces.
          </p>
        </div>

        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-cash-stack"></i>
          </div>
          <h3 class="custom-service-title">Gold and Silver Exchange</h3>
          <p class="custom-service-description">
            Trade in your old or unused gold and silver jewelry for new designs
            or cash. We offer competitive rates and a hassle-free process.
          </p>
        </div>
      </div>

      <div
        className=""
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "blue",
        }}
      ></div>

      <div class="custom-services-container">
        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-aspect-ratio"></i>
          </div>
          <h3 class="custom-service-title">Jewelry Repair and Restoration</h3>
          <p class="custom-service-description">
            Preserve the beauty of your treasured jewelry with our professional
            repair and restoration services. From resizing rings to fixing
            broken chains, we ensure your pieces look as good as new.
          </p>
        </div>

        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-stars"></i>
          </div>
          <h3 class="custom-service-title">Jewelry Cleaning and Polishing</h3>
          <p class="custom-service-description">
            Restore the sparkle of your favorite jewelry with our expert
            cleaning and polishing services. Perfect for reviving dull or
            tarnished pieces.
          </p>
        </div>

        <div class="custom-service-card">
          <div class="custom-icon">
            <i class="bi bi-cash-stack"></i>
          </div>
          <h3 class="custom-service-title">Gold and Silver Exchange</h3>
          <p class="custom-service-description">
            Trade in your old or unused gold and silver jewelry for new designs
            or cash. We offer competitive rates and a hassle-free process.
          </p>
        </div>
      </div>

      <div className="bookAppointment">
        <h2>Book an Appointment</h2>

        <p >
          Experience personalized attention and expert guidance with our
          exclusive appointment service. Whether you’re choosing an engagement
          ring, designing custom jewelry, or exploring our exquisite
          collections, our team is here to make your visit seamless and
          memorable
        </p>

        <div className="appointment-form">
    <div className="input-row col-md-12 " >
      <input type="text" placeholder="Name"  />
      <input type="email" placeholder="Email"  />
      <input type="tel" placeholder="Phone" />
    </div>
    <div className="input-row mt-3">
      <input type="date" />
      <select>
        <option>Select Department</option>
        <option>Jewelry Design</option>
        <option>Engagement Rings</option>
        <option>Custom Orders</option>
      </select>
      <select>
        <option>Select Faculty</option>
        <option>Mr. Smith</option>
        <option>Ms. Jane</option>
      </select>
    </div>

    <div className=" mt-3 " >
        <textarea className="col-md-12"></textarea>
    </div>

    <div>
        <button className="make_app_btn">Make an appoitment</button>
    </div>
            
        </div>
      </div>
    </>
  );
};




// import React, { useEffect, useState } from "react";
// import { Carousel } from 'react-bootstrap';
// import img1 from "../assets/img/testimonials-img1.jpg"
// import img2 from "../assets/img/testimonials-img2.jpg"
// import img3 from "../assets/img/testimonials-img3.jpg"


// export const Testimony = () => {
  
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slides = [
//         { img: img1, text: "Text 1", header:'manager' },
//         { img: img2, text: "Text 2" },
//         { img: img3, text: "Text 3" },
//       ];
    
//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 1000); // Change slide every 3 seconds
    
//         return () => clearInterval(interval); // Cleanup interval on unmount
//       }, []);

//   return (
//    <>
//  <div className="   testimony-container">
//       <div className="testimony_text_slides justify-content-center">
//         <div className=" col-md-6">
//         <h4>Testimonials</h4>
//         <p>
//           "We strive to deliver exceptional quality and service that exceeds
//           expectations. Each piece of jewelry we create is crafted with care,
//           ensuring unparalleled elegance and value. Our customers’ satisfaction
//           and trust are the true jewels of our success."
//         </p>
//         </div>
       
// <div className="col-md-6 testimony-details">
//           <div className="testimony-slide">
//             <img
//               src={slides[currentSlide].img}
//               alt={`Slide ${currentSlide}`}
//               className="testimony-img"
//             />
//             <div>
//             <h4>{slides[currentSlide].header}</h4>
//             <p className="testimony-text">{slides[currentSlide].text}</p>
            
//             <p></p>
//             </div>
           

//           </div>
//         </div>
//       </div>
//     </div>

//    </>
//   );
// };


import React, { useState, useEffect } from "react";
import img1 from "../assets/img/testimonials-img1.jpg";
import img2 from "../assets/img/testimonials-img2.jpg";
import img3 from "../assets/img/testimonials-img3.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Testimony = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: img1, text: "Text 1", header:'manager', rating: 4, description:'elegance and value. Our customers’ satisfaction and trust are the true jewels of our success."' },
    { img: img2, text: "Text 2", rating: 5,header:'employee',  description:'elegance and value. Our customers’ satisfaction and trust are the true jewels of our success."' },
    { img: img3, text: "Text 3", rating: 3 ,header:'employee', description:'elegance and value. Our customers’ satisfaction and trust are the true jewels of our success."'},
    { img: img1, text: "Text 4", rating: 5 ,header:'employee', description:'elegance and value. Our customers’ satisfaction and trust are the true jewels of our success."'},
];

  const handleSlideChange = (event) => {
    setCurrentSlide(event.item);
  };

  return (
    <div className="testimony-container">
      <div className="testimony_text_slides">
        <div className="col-md-6">
          <h4>Testimonials</h4>
          <p>
            "We strive to deliver exceptional quality and service that exceeds expectations. Each piece of jewelry we create is crafted with care, ensuring unparalleled elegance and value. Our customers’ satisfaction and trust are the true jewels of our success."
          </p>
        </div>
        <div className="col-md-6 testimony-details">
          <AliceCarousel
            items={slides.map((slide, index) => (
                <>
              
              <div key={index} className="testimony-slide">
                <img
                  src={slide.img}
                  alt={`Slide ${index}`}
                  className="testimony-img"
                />
                <div>
                  <h6>{slide.header}</h6>
                  <p className="testimony-text">{slide.text}</p>
                  <p>
                   {slide.rating}
                  </p>
                </div>
             
              </div>
              <p>{slide.description}</p>
              </>
            ))}
            activeIndex={currentSlide}
            onSlideChanged={handleSlideChange}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls={false}
            disableButtonsControls={false}
            mouseTracking
            touchTracking
            responsive={{
              0: { items: 1 },
              600: { items: 1 },
              1024: { items: 1 },
            }}
          />
        </div>
      </div>
    </div>
  );
};

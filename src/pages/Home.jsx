import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import "../App.css"
import pic4 from "../assets/img/pic4.jpg"
import { About } from "./About";
import { About2 } from "./About2";
import { Service } from "./Service";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Sri Ganesh Diamonds and Jewelers</h1>
          <p>Your trusted jewelry partner for every occasion.</p>

          <div className="card-container">
            <div className="card">
              <h3 className="card-title">Why Choose Sri Ganesh?</h3>
              <p className="card-description" style={{ color: "white" }}>
                Sri Ganesh is more than just a jewelry shop; it’s a tradition of
                trust, quality, and timeless craftsmanship. Our designs are a
                blend of modern artistry and classNameic elegance, crafted to
                celebrate your unique moments.
              </p>
              <button>Leran more</button>
            </div>
            <div className="card">
              <h4 className="card-title">Service</h4>
              <p className="card-description">
                Choose Sri Ganesh for unmatched quality and attention to detail
                in every piece of jewelry.
              </p>
            </div>

            <div className="card">
              <h4 className="card-title">Commitment</h4>
              <p className="card-description">
                With a commitment to purity and precision, we ensure every piece
                reflects unmatched beauty and value.
              </p>
            </div>

            <div className="card">
              <h4 className="card-title">Trust</h4>
              <p className="card-description">
                With a legacy of trust and a passion for perfection, we offer an
                exceptional collection that caters to all tastes and occasions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second image */}
      {/* <div className="row d-flex ">
        <div className="col-md-6">
          <img   src={pic4} className="pic4-image"/>
        </div>

        <div  className="col-md-6">

          <h2>About Us</h2>
          <p>

          
        Welcome to Sri Ganesh, where tradition meets timeless elegance. For years, 
        we’ve been dedicated to creating exquisite jewelry that celebrates life’s most precious moments.
         Rooted in craftsmanship and inspired by artistry, our collections are a perfect harmony of modern design 
         and classic beauty. At Sri Ganesh, we believe that jewelry is more than an accessory; it’s an expression of love,
          a symbol of tradition, and a reflection of your unique story. Each piece we craft is designed to capture these
           emotions,
         blending intricate details with the finest materials to create something truly extraordinary.
         </p>

<div>
<ul>
              <li>
                <i class="bi bi-award"></i>
                <div>
                  <h5>Uncompromised Quality:</h5>
                  <p>We are committed to offering only the purest and most authentic jewelry.</p>
                </div>
              </li>
              <li>
                <i class="bi bi-tools"></i>
                <div>
                  <h5>Exquisite Craftsmanship</h5>
                  <p>Every piece is crafted with precision, care, and attention to detail.</p>
                </div>
              </li>
              
            </ul>
</div>

        </div>
      </div> */}

<About/>

<About2/>

<Service/>
    </>
  );
};

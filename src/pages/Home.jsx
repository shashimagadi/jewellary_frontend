import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import "../App.css"
import pic4 from "../assets/img/pic4.jpg"
import { About } from "./About";
import { About2 } from "./About2";
import { Service } from "./Service";
import { Departments } from "./Departments";
import { Footer } from "./Footer";
import { Faculty } from "./Faculty";

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

      

<About/>

<About2/>

<Service/>

<Departments/>

<Faculty/>
<Footer/>
    </>
  );
};

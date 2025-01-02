import React, { useState } from 'react'
import arjun from "../assets/img/arjun.jpg"
import anjali from "../assets/img/anjali.jpg"
import priya from "../assets/img/priya.jpg"
import ravi from "../assets/img/ravi.jpg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Faculty = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "Do you offer custom jewelry design services?",
      answer: "Yes, we specialize in creating custom jewelry pieces tailored to your preferences.",
      open: false,
    },
    {
      question: "What materials do you use for custom jewelry?",
      answer: "We use a variety of materials including gold, silver, platinum, and precious stones.",
      open: false,
    },
    {
      question: "How long does it take to create custom jewelry?",
      answer: "Typically, it takes 2-4 weeks depending on the complexity of the design.",
      open: false,
    },
    {
      question: "Do you provide maintenance for jewelry?",
      answer: "Yes, we offer cleaning and maintenance services for all our jewelry.",
      open: false,
    },
  ]);

  

  const toggleFAQ = (index) => {
    const updatedFaqs = faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : faq.open,
    }));
    setFaqs(updatedFaqs);
  };


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



    <div style={{ padding: "20px", maxWidth: "100%", margin: "20px 100px 20px 100px " }}>
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      <p style={{ textAlign: "center" }}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
      </p>

      <div className='faculty-questions'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginBottom: "10px",
              padding: "10px",
            }}
            className={`faq-item ${faq.open ? "open" : ""}`}
          >
            <h4
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{faq.open ? "" : ">"}</span>
            </h4>
            {faq.open && <p style={{ marginTop: "10px" }}>{faq.answer}</p>}
          </div>
        ))}
      </div>

      
    </div>
    </>
  )
}









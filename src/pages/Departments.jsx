


import React, { useState } from "react";
import designImg from "../assets/img/design.jpg";
import salesImg from "../assets/img/sales.jpg"
import certificationImg from "../assets/img/certification.jpg"
import qualityImg from "../assets/img/quality.jpg"

export const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState("design");

  const departmentContent = {
    design: {
      title: "Design",
      description: `
        Our Design & Customization Department is the heart of creativity at Sri Ganesh.
        Whether you're envisioning a one-of-a-kind engagement ring or a sentimental piece
        for a loved one, our skilled designers work meticulously to transform your ideas
        into reality. Using the latest design software and traditional craftsmanship, we
        ensure each custom piece is as unique as the story it represents.
      `,
      img: designImg,
    },
    sales: {
      title: "Sales",
      description: `
        Our Sales & Customer Service team is committed to making your jewelry shopping
        experience enjoyable and memorable. With deep knowledge of our collections and
        an understanding of individual preferences, they assist you in finding the perfect
        piece that matches your style and budget. Whether you’re exploring timeless classics
        or contemporary trends, our friendly staff provides personalized recommendations
        and ensures you leave with complete satisfaction.
      `,
      img: salesImg,
    },
    certificate: {
      title: "Certification",
      description: `
        Our Certification Department ensures the authenticity and quality of every piece.
        We partner with globally recognized gemological labs to provide you with accurate
        certifications, offering transparency and trust. From diamonds to colored gemstones,
        we ensure each piece meets the highest standards of quality and craftsmanship.
      `,
      img: certificationImg,
    },
    quality: {
      title: "Quality",
      description: `
        Quality is our hallmark at Sri Ganesh. Our Quality Control Department meticulously
        inspects every piece of jewelry before it reaches you. From ensuring structural integrity
        to checking for flawless finishes, our team ensures that every product meets the highest
        standards of excellence. Trust us for unparalleled craftsmanship and enduring quality.
      `,
      img: qualityImg,
    },
  };

  const renderDepartmentContent = (key) => {
    const content = departmentContent[key];
    return (
      <>
        <div className="col-md-6 ">
          <h2 className="mb-3">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="col-md-3">
          <img src={content.img} style={{ width: "90%", height: "200px" }} alt={content.title} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="department text-center">
        <h2>Departments</h2>
        <p>Various departments we have to serve you</p>
      </div>
      {/* <div className="d-flex flex-column flex-md-row department_main">
        <div className="col-md-3">
          <ul>
            <li onClick={() => setActiveDepartment("design")} className="mt-2">Design and Customization Department</li>
            <li onClick={() => setActiveDepartment("sales")} className="mt-2">Sales and Customer Service</li>
            <li onClick={() => setActiveDepartment("certificate")} className="mt-2">Certification Department</li>
            <li onClick={() => setActiveDepartment("quality")} className="mt-2">Quality Control Department</li>
          </ul>
        </div>
        {renderDepartmentContent(activeDepartment)}
      </div> */}

<div className="d-flex flex-column flex-md-row department_main">
      <div className="col-md-3 position-relative department-sidebar">
        <ul className="department-list">
          <li
            className={`department-item mt-2 ${activeDepartment === "design" ? "active" : ""}`}
            onClick={() => setActiveDepartment("design")}
          >
            Design and Customization Department
          </li>
          <li
            className={`department-item mt-2 ${activeDepartment === "sales" ? "active" : ""}`}
            onClick={() => setActiveDepartment("sales")}
          >
            Sales and Customer Service
          </li>
          <li
            className={`department-item mt-2 ${activeDepartment === "certificate" ? "active" : ""}`}
            onClick={() => setActiveDepartment("certificate")}
          >
            Certification Department
          </li>
          <li
            className={`department-item mt-2 ${activeDepartment === "quality" ? "active" : ""}`}
            onClick={() => setActiveDepartment("quality")}
          >
            Quality Control Department
          </li>
        </ul>
        {/* Highlighted Vertical Line */}
        <div className={`vertical-line ${activeDepartment}`} />
      </div>
      {renderDepartmentContent(activeDepartment)}
    </div>
    </div>
  );
};

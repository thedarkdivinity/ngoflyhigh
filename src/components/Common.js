import React from "react";
import Heading from "../components/Heading";
import Paragraph from "./Paragraph";

const Common = ({ para, heading, imgsrc, imgAlt }) => {
  return (
    <>
      <section className="common">
        <div className="container pt-4">
          <Heading headingText={heading} />
          <hr className="bg-white w-50 mx-auto" />
          <div className="commonContent mt-5">
            <Paragraph para={para} />
            <img src={imgsrc} alt={imgAlt} className="img-fluid " data-aos="flip-left" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

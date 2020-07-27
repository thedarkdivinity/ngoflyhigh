import React from "react";
import aboutImg from "../../images/image3.jpg";
import Common from "../Common";



const About = () => {
  return (
    <>
      <Common
      heading="about us"
        para=" NGO Fly-High is a nonprofit organization that is dedicated towards
     women’s and children’s. We help women’s who are facing domestic
     violence, illiteracy, gender discrimination etc and children who
     are below poverty line and underprivileged. We promise to work for
     the betterment of society. Our main aim is to empower women’s and
     motivate them to become independent"
     
     imgsrc={aboutImg}
     imgAlt="Indian Women carrying pots on their head"
      />
    </>
  );
};

export default About;

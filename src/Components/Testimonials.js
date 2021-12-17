import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { testOne, testTwo, testThree, testFour, testFive } from "./data";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <TestimonialCard {...testOne} className="one" />
      <TestimonialCard {...testTwo} />
      <TestimonialCard {...testThree} />
      <TestimonialCard {...testFour} />
      <TestimonialCard {...testFive} />
    </div>
  );
};

export default Testimonials;

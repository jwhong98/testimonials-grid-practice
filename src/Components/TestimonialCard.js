import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <div className="card-container">
      <div className="author">
        <img src={props.img} alt="profile-img" className="profile-img" />
        <div className="author-textwrap">
          <p className="author-name">
            {props.author} {props.img}
          </p>
          <p className="author-status">{props.status}</p>
        </div>
      </div>
      <div className="heading">{props.heading}</div>
      <div className="body">{props.body}</div>
    </div>
  );
};

export default TestimonialCard;

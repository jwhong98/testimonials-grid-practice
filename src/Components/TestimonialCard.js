import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: props.background }}
    >
      <div className="author">
        <img src={props.img} alt="profile-img" className="profile-img" />
        <div className="author-textwrap">
          <p
            className="author-name"
            style={{
              color: props.lightText
                ? "hsl(0, 0%, 100%)"
                : "hsl(217, 19%, 35%)",
            }}
          >
            {props.author}
          </p>
          <p
            className="author-status"
            style={{
              color: props.lightText
                ? "hsl(0, 0%, 100%)"
                : "hsl(217, 19%, 35%)",
            }}
          >
            {props.status}
          </p>
        </div>
      </div>
      <div
        className="heading"
        style={{
          color: props.lightText ? "hsl(0, 0%, 100%)" : "hsl(217, 19%, 35%)",
        }}
      >
        {props.heading}
      </div>
      <div
        className="body"
        style={{
          color: props.lightText ? "hsl(0, 0%, 100%)" : "hsl(217, 19%, 35%)",
        }}
      >
        {props.body}
      </div>
    </div>
  );
};

export default TestimonialCard;

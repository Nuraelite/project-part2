import React from "react";
import { Link, useLocation } from "react-router-dom";

const FAQItem = (props) => {
  const location = useLocation();
  
  return (
    <div className="faq-post">
      <div className="faq-content">
        <strong>{props.post.id}, {props.post.title}</strong>
      </div>
      <div className="faq-btn">
        <Link to={`${location.pathname}/readmore1`}>
          <button className="button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default FAQItem;

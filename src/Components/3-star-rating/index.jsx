import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseMove(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleMouseClick(index) {
    setRating(index);
  }

  return (
    <div className="star-rating-container">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMouseClick(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

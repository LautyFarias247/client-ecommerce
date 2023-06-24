import React from "react";
import StarRatings from "react-star-ratings";

const Rating = () => {
  return (
    <StarRatings
      rating={5}
      starRatedColor="#ffb829"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
      name="rating"
    />
  );
};

export default Rating;

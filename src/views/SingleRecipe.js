import React from "react";

const SingleRecipe = ({
  location: {
    state: { id, image, title, servings, readyInMinutes },
  },
}) => {
  return (
    <div>
      <h1>SingleRecipe</h1>
      <img src={image} alt={title} style={{ width: "200px" }} />
      <h2>{title}</h2>
    </div>
  );
};

export default SingleRecipe;

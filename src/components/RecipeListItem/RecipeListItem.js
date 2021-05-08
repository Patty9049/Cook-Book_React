import React from "react";

const RecipeListItem = ({ recipe: { title, image }, baseImgUrl }) => {
  return (
    <>
      <img
        src={`${baseImgUrl}${image}`}
        alt={title}
        style={{ width: "200px" }}
      />
      <h3>{title}</h3>
      <button>add to fav</button>
    </>
  );
};

export default RecipeListItem;

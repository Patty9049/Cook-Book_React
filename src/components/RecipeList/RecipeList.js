import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipeList = ({ recipes, baseImgUrl }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeListItem recipe={recipe} baseImgUrl={baseImgUrl} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

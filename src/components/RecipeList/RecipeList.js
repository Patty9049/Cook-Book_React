import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipeList = ({ recipesArray }) => {
  return (
    <ul>
      {recipesArray.map((recipe) => (
        <li key={recipe.id}>
          <RecipeListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

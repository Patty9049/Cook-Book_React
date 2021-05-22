import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipeList = ({ recipes, baseImgUrl, favRecipes, addFavRecipe }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeListItem
            recipe={recipe}
            baseImgUrl={baseImgUrl}
            favRecipes={favRecipes}
            addFavRecipe={addFavRecipe}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

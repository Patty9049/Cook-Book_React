import React, { useContext } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import AppContext from "../context";

const FavRecipeList = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>FavRecipe</h1>
      <RecipeList recipesArray={context.favRecipes} />
    </div>
  );
};

export default FavRecipeList;

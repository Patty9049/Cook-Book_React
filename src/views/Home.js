import React from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";

const Home = ({ recipes, baseImgUrl, getRecipes }) => {
  return (
    <div>
      <RecipeSearchForm getRecipes={getRecipes} />
      <RecipeList
        recipes={recipes}
        baseImgUrl={baseImgUrl}
        baseImgUrl={baseImgUrl}
      />
    </div>
  );
};

export default Home;

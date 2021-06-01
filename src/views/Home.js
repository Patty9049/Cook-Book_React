import React, { useContext } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import AppContext from "../context";
const Home = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <RecipeList recipesArray={context.recipes} />
    </div>
  );
};

export default Home;

import React from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import axios from "axios";
const Home = ({
  recipes,
  baseImgUrl,
  getRecipes,
  favRecipes,
  addFavRecipe,
}) => {
  getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          recipes: res.data.results,
          baseImgUrl: res.data.baseUri,
        });
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };
  return (
    <div>
      <RecipeList
        recipes={recipes}
        baseImgUrl={baseImgUrl}
        baseImgUrl={baseImgUrl}
        favRecipes={favRecipes}
        addFavRecipe={addFavRecipe}
      />
    </div>
  );
};

export default Home;

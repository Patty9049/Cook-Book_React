import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "./routing/Router";
import { getFavReciesFromLocalStorage } from "./utils/localStorageGetter";
import { setFavRecipesToLocalStorage } from "./utils/localStorageSetter";
import AppContext from "./context";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState(getFavReciesFromLocalStorage());
  const [baseImgUrl, setBaseImgUrl] = useState("");

  useEffect(() => {
    setFavRecipesToLocalStorage(favRecipes);
  }, [favRecipes]);

  const getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res);
        setRecipes(res.data.results);
        setBaseImgUrl(res.data.baseUri);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  const addFavRecipe = (title, image, servings, readyInMinutes, id) => {
    console.log("ADD FAV RECIPE");
    console.log(id);
    const favRecipe = {
      id,
      title,
      image,
      servings,
      readyInMinutes,
    };
    console.log("favRecipe", favRecipe);
    setFavRecipes([...favRecipes, favRecipe]);
    console.log("actual", favRecipes);
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        favRecipes,
        baseImgUrl,
        addFavRecipe,
        getRecipes,
      }}
    >
      <Router />
    </AppContext.Provider>
  );
};

export default App;

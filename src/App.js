import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "./routing/Router";
import { setFavRecipesToLocalStorage } from "./utils/localStorageSetter";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const [baseImgUrl, setBaseImgUrl] = useState("");

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

  useEffect(
    (favRecipes) => {
      setFavRecipesToLocalStorage(favRecipes);
    },
    [favRecipes]
  );

  // const setFavRecipesToLocalStorage = () => {
  //   localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
  // };

  const addFavRecipe = (title, image, servings, readyInMinutes, id) => {
    // e.preventDefault();
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
    // console.log(favRecipes);
    // const actualFavRecipes = [...favRecipes, favRecipe];
    // console.log("actual", actualFavRecipes);
    setFavRecipes([...favRecipes, favRecipe]);
    console.log("actual", favRecipes);
  };

  // const removeFavRecipe = () => {

  // }

  return (
    <>
      <Router
        recipes={recipes}
        baseImgUrl={baseImgUrl}
        getRecipes={getRecipes}
        favRecipes={favRecipes}
        addFavRecipe={addFavRecipe}
      />
    </>
  );
};

export default App;

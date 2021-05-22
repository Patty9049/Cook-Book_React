import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchAppBar from "../components/AppBar/AppBar";
import { routes } from "../routes";
import FavRecipeList from "../views/FavRecipeList";
import Home from "../views/Home";
import SingleRecipe from "../views/SingleRecipe";

const Router = ({
  recipes,
  baseImgUrl,
  getRecipes,
  favRecipes,
  addFavRecipe,
}) => {
  console.log("baseImgUrl", baseImgUrl);
  return (
    <BrowserRouter>
      <SearchAppBar getRecipes={getRecipes} />
      <Switch>
        <Route
          exact
          path={routes.home}
          component={() => (
            <Home
              recipes={recipes}
              baseImgUrl={baseImgUrl}
              getRecipes={getRecipes}
              favRecipes={favRecipes}
              addFavRecipe={addFavRecipe}
            />
          )}
        />
        <Route
          path={routes.favRecipes}
          component={() => (
            <FavRecipeList recipes={recipes} favRecipes={favRecipes} />
          )}
        />
        <Route path={routes.singleRecipe} component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchAppBar from "../components/AppBar/AppBar";
import { routes } from "../routes";
import FavRecipe from "../views/FavRecipe";
import Home from "../views/Home";
import SingleRecipe from "../views/SingleRecipe";

const Router = ({ recipes, baseImgUrl, getRecipes }) => {
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
            />
          )}
        />
        <Route path={routes.favRecipes} component={FavRecipe} />
        <Route path={routes.singleRecipe} component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

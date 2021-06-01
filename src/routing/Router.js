import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchAppBar from "../components/AppBar/AppBar";
import { routes } from "../routes";
import FavRecipeList from "../views/FavRecipeList";
import Home from "../views/Home";
import SingleRecipe from "../views/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.favRecipes} component={FavRecipeList} />
        <Route path={routes.singleRecipe} component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

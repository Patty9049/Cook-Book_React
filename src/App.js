import React, { Component } from "react";
import styles from "./App.module.scss";
import axios from "axios";
import RecipeSearchForm from "./components/RecipeSearchForm/RecipeSearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import RecipeList from "./components/RecipeList/RecipeList";
import Router from "./routing/Router";

class App extends Component {
  state = {
    recipes: [],
    baseImgUrl: "",
  };

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

  render() {
    return (
      <div>
        <h1 className={styles.title}>
          {" "}
          <span>
            {" "}
            <FontAwesomeIcon
              className={styles.icon}
              icon={faUtensils}
            /> Cook{" "}
          </span>{" "}
          Book
        </h1>

        <Router
          recipes={this.state.recipes}
          baseImgUrl={this.state.baseImgUrl}
          getRecipes={this.getRecipes}
        />
      </div>
    );
  }
}
export default App;

import React from "react";
import styles from "./RecipeSearchForm.module.scss";

const RecipeSearchForm = ({ getRecipes }) => {
  return (
    <form onSubmit={getRecipes}>
      <input
        type="search"
        name="recipeName"
        placeholder="Type your recipe name..."
      />
      <label htmlFor="recipeNumber">Choose number of recipes:</label>
      <select name="recipeNumber" id="recipeNumber">
        <option value={5}>5</option>
        <option value={15}>15</option>
        <option value={25}>25</option>
      </select>
      <button className={styles.btn} type="submit">
        search
      </button>
    </form>
  );
};

export default RecipeSearchForm;

import React from "react";

const FavRecipeList = ({ favRecipes }) => {
  console.log("FAVFAV", favRecipes);
  return (
    <div>
      <h1>FavRecipe</h1>
      <ul>
        {favRecipes.map((fav) => (
          <li key={fav.id}>
            <h1>{fav.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavRecipeList;

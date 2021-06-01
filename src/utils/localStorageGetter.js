export const getFavReciesFromLocalStorage = () => {
  let localStorageFavRecipes;

  if (localStorage.getItem("favRecipes")) {
    localStorageFavRecipes = JSON.parse(localStorage.getItem("favRecipes"));
  } else {
    localStorageFavRecipes = [];
  }

  return localStorageFavRecipes;
};

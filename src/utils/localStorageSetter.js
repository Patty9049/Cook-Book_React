export const setFavRecipesToLocalStorage = (favRecipes) => {
  localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
};

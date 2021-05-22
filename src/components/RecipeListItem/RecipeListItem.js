import styles from "./RecipeListItem.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const RecipeListItem = ({
  recipe: { title, image, servings, readyInMinutes, id },
  baseImgUrl,
  favRecipes,
  addFavRecipe,
}) => {
  return (
    <div className={styles.mainContainer}>
      <Link
        to={{
          pathname: `/single-recipe/${title.replace(/\s/g, "")}`,
          state: {
            title,
            image: `${baseImgUrl}${image}`,
            id,
            readyInMinutes,
            servings,
            test: "abc",
          },
        }}
      >
        <div className={styles.imgTitleContainer}>
          <img
            className={styles.itemImg}
            src={`${baseImgUrl}${image}`}
            alt={title}
          />
          <h3 className={styles.itemTitle}>{title}</h3>
        </div>
      </Link>
      <button
        className={styles.addToFavBtn}
        onClick={() => addFavRecipe(title, image, servings, readyInMinutes, id)}
      >
        add to fav
      </button>
    </div>
  );
};

export default RecipeListItem;

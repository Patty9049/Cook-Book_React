import styles from "./RecipeListItem.module.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";

const RecipeListItem = ({
  recipe: { title, image, servings, readyInMinutes, id },
}) => {
  const context = useContext(AppContext);
  const { baseImgUrl, addFavRecipe } = context;

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

import styles from "./RecipeListItem.module.scss";
import React from "react";

const RecipeListItem = ({ recipe: { title, image }, baseImgUrl }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgTitleContainer}>
        <img
          className={styles.itemImg}
          src={`${baseImgUrl}${image}`}
          alt={title}
        />
        <h3 className={styles.itemTitle}>{title}</h3>
      </div>
      <button className={styles.addToFavBtn}>add to fav</button>
    </div>
  );
};

export default RecipeListItem;

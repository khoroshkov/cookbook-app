import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { Recipe } from "../Recipe/Recipe";
import styles from "./RecipeList.module.css"

export const RecipesList = () => {
  const { recipes } = useContext(GlobalContext);

  return (
    <div>
      <h2 className={styles.myRecipesTitle}> My recipes</h2>
      <ul className={styles.recipesList}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/globalState";
import { Recipe } from "../Recipe/Recipe";
import styles from "./RecipeList.module.css"

export const RecipesList = () => {
  const { recipes, getRecipes } = useContext(GlobalContext);

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h2 className={styles.myRecipesTitle}> My recipes</h2>
      <ul className={styles.recipesList}>
        {recipes.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

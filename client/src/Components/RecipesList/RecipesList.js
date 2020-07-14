import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/globalState";
import { Recipe } from "../Recipe/Recipe";
import Loader from "react-loader-spinner";
import styles from "./RecipeList.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const RecipesList = () => {
  const { recipes, getRecipes, loading } = useContext(GlobalContext);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2 className={styles.myRecipesTitle}> My recipes</h2>
      <ul className={styles.recipesList}>
        {loading && (
          <Loader
            type="Puff"
            color="rgb(255, 102, 0)"
            timeout={3000}
            className={styles.loader}
          />
        )}
        {recipes.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

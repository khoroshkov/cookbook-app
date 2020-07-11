import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { Recipe } from "../Recipe/Recipe";

export const RecipesList = () => {
  const { recipes } = useContext(GlobalContext);

  return (
    <div>
      <h2> My recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

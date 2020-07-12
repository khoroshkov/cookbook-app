import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./Recipe.module.css";

export const Recipe = ({ recipe }) => {
  const { recipes, deleteRecipe } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState({});

  const editRecipe = (id) => {
    const recipe = recipes.find((recipe) => recipe.id === id);

    setRecipeToEdit(recipe);
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <li className={styles.recipeContainer}>
      <ModalWindow
        isOpen={isOpen}
        recipe={recipeToEdit}
        onCancel={handleCancel}
      />
      <div className={styles.recipeInfo}>
        <h4 className={styles.recipeItemHeader}>
          Title: <span className={styles.recipeItemTitle}>{recipe.title}</span>
        </h4>
        <p className={styles.descriptionText}><span className={styles.recipeItemDescription}>Description: </span>{recipe.description}</p>
        <span className={styles.createdTitle}>Created at: {recipe.createdAt}</span>
      </div>
      <div className={styles.recipeBtnContainer}>
        <button
          className={styles.editBtn}
          aria-label="edit button"
          onClick={() => editRecipe(recipe.id)}
        >
          <MdEdit />
        </button>
        <button
          className={styles.clearBtn}
          aria-label="delete button"
          onClick={() => deleteRecipe(recipe.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

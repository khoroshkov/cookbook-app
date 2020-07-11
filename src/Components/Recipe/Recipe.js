import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { MdEdit, MdDelete } from "react-icons/md";

export const Recipe = ({ recipe }) => {
  const { recipes, deleteRecipe } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState({})

  
  const editRecipe = (id) => {
    const recipe = recipes.find((recipe) => recipe.id === id);

    setRecipeToEdit(recipe)
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <li>
      <ModalWindow isOpen={isOpen} recipe={recipeToEdit}  onCancel={handleCancel}/>
      <div>
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        <span>{recipe.createdAt}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => editRecipe(recipe.id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => deleteRecipe(recipe.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

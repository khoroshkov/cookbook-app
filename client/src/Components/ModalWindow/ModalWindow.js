import React, { useState, useContext, useEffect, useCallback } from "react";
import Portal from "../Portal/Portal";
import { GlobalContext } from "../../context/globalState";
import styles from "./ModalWindow.module.css";
import { MdSend } from "react-icons/md";

export const ModalWindow = ({ isOpen, recipe, onCancel }) => {
  const { editRecipe, getRecipes } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onCancel();
      }
    },
    [onCancel]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: recipe._id,
      title: title || recipe.title,
      description: description || recipe.description,
      createdAt: recipe.createdAt,
    };

    editRecipe(newRecipe);

    getRecipes();

    onCancel();
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.modalOverlay}>
            <form onSubmit={onSubmit} className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                  Edit your {recipe.title} recipe
                </div>
              </div>
              <div className={styles.modalBody}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    value={title || recipe.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    value={description || recipe.description}
                    onChange={(e) =>
                      setDescription(recipe.description && e.target.value)
                    }
                  />
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className={styles.editBtn}
                >
                  Edit recipe <MdSend className={styles.btnIcon} />
                </button>
                <button onClick={onCancel} className={styles.cancelBtn}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Portal>
      )}
    </>
  );
};

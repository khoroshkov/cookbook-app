import React, { useState, useContext } from "react";
import Portal from "../Portal/Portal";
import { GlobalContext } from "../../context/globalState";
import styles from "./ModalWindow.module.css";
import { MdSend } from "react-icons/md";

export const ModalWindow = ({ isOpen, recipe, onCancel }) => {
  const { editRecipe } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: recipe.id,
      title: title || recipe.title,
      description: description || recipe.description,
      createdAt: recipe.createdAt,
    };

    console.log(newRecipe);

    editRecipe(newRecipe);

    onCancel();
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                  Edit your {recipe.title}
                </div>
              </div>
              <div className={styles.modalBody}>
                <form>
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
                    <input
                      type="text"
                      value={description || recipe.description}
                      onChange={(e) =>
                        setDescription(recipe.description && e.target.value)
                      }
                    />
                  </div>
                </form>
              </div>
              <div className={styles.modalFooter}>
                <button onClick={onSubmit}>
                  <MdSend className="btn-icon" /> Edit recipe
                </button>
                <button onClick={onCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

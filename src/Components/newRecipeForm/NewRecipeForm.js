import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import moment from "moment";
import { MdSend } from "react-icons/md";
import styles from "./NewReciveForm.module.css";

export const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addRecipe } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Math.floor(Math.random() * 100000000),
      title,
      description,
      createdAt: moment().format("LLL"),
    };

    addRecipe(newRecipe);

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h3>Add your new recipe</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title..."
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe ingridients..."
          />
        </div>
        <button className={styles.btn}>
          {" "}
          Save
          <MdSend className={styles.btnIcon} />
        </button>
      </form>
    </div>
  );
};

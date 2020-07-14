import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import moment from "moment";
import { Alert } from "../Alert/Alert";
import { MdSend } from "react-icons/md";
import styles from "./NewRecipeForm.module.css";

export const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const { addRecipe } = useContext(GlobalContext);

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });

    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title !== "" && description !== "") {
      const newRecipe = {
        id: Math.floor(Math.random() * 100000000),
        title,
        description,
        createdAt: moment().format("LLL"),
      };

      addRecipe(newRecipe);

      setTitle("");
      setDescription("");
      handleAlert({
        type: "success",
        text: "Your new fantastic recipe has been saved",
      });
    } else {
      handleAlert({
        type: "danger",
        text:
          "Please, add title and description of Your new fantastic cooking recipe",
      });
      return;
    }
  };

  return (
    <div className={styles.newRecipeFormContainer}>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h3 className={styles.newRecipeFormTitle}>Add your new recipe</h3>
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
        <div className={styles.descContainer}>
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

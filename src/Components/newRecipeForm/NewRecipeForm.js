import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import moment from "moment";
import { CSSTransition } from "react-transition-group";
import { Alert } from "../Alert/Alert";
import { MdSend } from "react-icons/md";
import styles from "./NewReciveForm.module.css";
import pop from "../../transitions/alertTransition.module.css";

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
    <div>
      {alert.show && (
        <CSSTransition
          in={alert}
          timeout={300}
          // transitionName="enter"
          classNames={pop}
          unmountOnExit
        >
          <Alert type={alert.type} text={alert.text} />
        </CSSTransition>
      )}

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

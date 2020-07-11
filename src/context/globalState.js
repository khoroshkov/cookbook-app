import React, { createContext, useReducer } from "react";
import recipesReducer from "../reducer/recipesReducer";

const initialState = {
  recipes: [
    {
      id: 1,
      title: "pizza",
      description: "tomato, ham, cheese, onion. Cooking time about 30 min.",
      createdAt: "12.09.2020",
    },
    {
      id: 2,
      title: "cookies",
      description:
        "sugar, flavour, chokolate, sweeties, something else. Cooking time about 1.30 min.",
      createdAt: "12.09.2020",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  function addRecipe(recipe) {
    dispatch({
      type: "ADD_RECIPE",
      payload: recipe,
    });
  }

  function deleteRecipe(id) {
    dispatch({
      type: "DELETE_RECIPE",
      payload: id,
    });
  }

  function editRecipe(recipe) {
    dispatch({
      type: "EDIT_RECIPE",
      payload: recipe,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        recipes: state.recipes,
        addRecipe,
        deleteRecipe,
        editRecipe,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

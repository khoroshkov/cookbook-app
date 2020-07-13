import React, { createContext, useReducer } from "react";
import axios from "axios";
import recipesReducer from "../reducer/recipesReducer";

const initialState = {
  recipes: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  async function getRecipes() {
    try {
      const res = await axios.get("/recipes");

      dispatch({
        type: "GET_RECIPES",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "RECIPES_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addRecipe(recipe) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/recipes", recipe, config);

      dispatch({
        type: "ADD_RECIPE",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "RECIPES_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteRecipe(id) {
    try {
      await axios.delete(`/recipes/${id}`);

      dispatch({
        type: "DELETE_RECIPE",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "RECIPES_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function editRecipe(recipe) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.patch(`/recipes/${recipe.id}`, recipe, config);

      dispatch({
        type: "EDIT_RECIPE",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "RECIPES_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        recipes: state.recipes,
        getRecipes,
        addRecipe,
        deleteRecipe,
        editRecipe,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

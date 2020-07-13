import React from "react";
import { GlobalProvider } from "./context/globalState";
import {Header} from "./Components/Header/Header"
import { NewRecipeForm } from "./Components/newRecipeForm/NewRecipeForm";
import { RecipesList } from "./Components/RecipesList/RecipesList";
import "./App.css";



function App() {
  return (
    <GlobalProvider>
      <div className="App">
      <div className="container">
        <Header/>
        <NewRecipeForm/>
        <RecipesList/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

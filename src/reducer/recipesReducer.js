export default (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
      
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      }

    case "EDIT_RECIPE":
      let newState = state.recipes.filter(recipe => recipe.id !== action.payload.id)
      return {
        ...state,
        recipes: [...newState, action.payload]
      }
  
    default:
      return state;
  }
}